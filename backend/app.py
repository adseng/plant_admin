from flask import Flask, request, render_template, jsonify, g, make_response
from flask_cors import CORS
import sqlite3

app = Flask(__name__, template_folder='./static', static_folder='./static/assets')
CORS(app)

DATABASE = r'plant.db'


# make_dicts()
def make_dicts(cursor, row):  # 将查询返回的数据的转换为字典类型，这样会跟方便使用。此函数会在get_db()函数中用到，赋值给db.row_factory。
    return dict((cursor.description[idx][0], value)
                for idx, value in enumerate(row))


# get_db()
def get_db():
    # 获取数据库连接
    db = getattr(g, '_database', None)
    # g对象时一个Flask应用的公共对象（和request、session一样），用于存储用户的数据——整个应用共享！
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        # 建立数据库连接
        db.row_factory = make_dicts
        # 转换默认的查询数据类型为字典类型，也可以使用sqlite3.Row
    return db
    # 返回数据库连接，可能返回为None


# 定义一个通用的返回函数，用于生成统一的JSON响应格式
def make_api_response(data=None, message="", status=200):
    response = {
        'status': status,
        'message': message,
        'data': data,
    }
    return make_response(jsonify(response), status)


# close_connection()
@app.teardown_appcontext  # 这个装饰器用于实现在请求的最后自动关闭数据库连接的功能
def close_connection(exception):  # 关闭数据库连接
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/users', methods=['GET'])
def get_user_list():
    with get_db() as db:
        cursor = db.cursor()

        # 查询所有user表中的记录
        cursor.execute("SELECT * FROM user")
        users = cursor.fetchall()

        # 将查询结果转换为字典列表（由于已经定义了make_dicts函数作为row_factory）
        users_dict_list = [dict(user) for user in users]

        return jsonify(users_dict_list)


# 添加用户
@app.route('/adduser', methods=['POST'])
def add_user():
    account = request.json.get('account')
    pwd = request.json.get('pwd')
    role = request.json.get('role')

    with get_db() as db:
        cursor = db.cursor()
        query = "INSERT INTO user (account, pwd, role) VALUES (?, ?, ?)"
        cursor.execute(query, (account, pwd, role))
        db.commit()

    return jsonify({"message": "User added successfully."}), 200


# 更新用户（通过ID）
@app.route('/updateuserbyid/<int:user_id>', methods=['PUT'])
def update_user_by_id(user_id):
    account = request.json.get('account')
    pwd = request.json.get('pwd')
    role = request.json.get('role')

    with get_db() as db:
        cursor = db.cursor()
        query = "UPDATE user SET account=?, pwd=?, role=? WHERE id=?"
        cursor.execute(query, (account, pwd, role, user_id))
        db.commit()

    return jsonify({"message": "User updated successfully."}), 200


# 删除用户（通过ID）
@app.route('/deleteuserbyid/<int:user_id>', methods=['DELETE'])
def delete_user_by_id(user_id):
    with get_db() as db:
        cursor = db.cursor()
        query = "DELETE FROM user WHERE id=?"
        cursor.execute(query, (user_id,))
        db.commit()

    return jsonify({"message": "User deleted successfully."}), 200


# 查询单个用户（通过某个字段，这里以account为例）
@app.route('/selectuserbyaccount/<string:account>', methods=['GET'])
def select_user_by_account(account):
    with get_db() as db:
        cursor = db.cursor()
        query = "SELECT * FROM user WHERE account=?"
        cursor.execute(query, (account,))
        user = cursor.fetchone()

    if user:
        return jsonify(user), 200
    else:
        return jsonify({"message": "User not found."}), 404


# 查询所有植物信息
@app.route('/plants', methods=['GET'])
def select_all():
    with get_db() as db:
        cursor = db.cursor()
        query = "SELECT * FROM plant"
        cursor.execute(query)
        plants = cursor.fetchall()

    return jsonify(plants), 200


# 根据ID查询植物信息
@app.route('/plants/<int:plant_id>', methods=['GET'])
def select_plants_by_id(plant_id):
    with get_db() as db:
        cursor = db.cursor()
        query = "SELECT * FROM plant WHERE id=?"
        cursor.execute(query, (plant_id,))
        plant = cursor.fetchone()

    if plant:
        return jsonify(plant), 200
    else:
        return jsonify({"message": "Plant not found."}), 404


# 添加植物信息
@app.route('/plants', methods=['POST'])
def add_plant():
    data = request.get_json()
    with get_db() as db:
        cursor = db.cursor()
        query = """
            INSERT INTO plant (
                category,
                family_serial_number,
                chinese_family_name,
                latin_family_name,
                chinese_genus_name,
                latin_genus_name,
                chinese_species_name,
                latin_species_name,
                author_of_the_species,
                rank_indicator,
                status,
                county_city_distribution,
                remarks
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """
        cursor.execute(query, (
            data['category'],
            data['family_serial_number'],
            data['chinese_family_name'],
            data['latin_family_name'],
            data['chinese_genus_name'],
            data['latin_genus_name'],
            data['chinese_species_name'],
            data['latin_species_name'],
            data['author_of_the_species'],
            data['rank_indicator'],
            data['status'],
            data['county_city_distribution'],
            data['remarks']
        ))
        db.commit()

    return jsonify({"message": "Plant added successfully."}), 200


# 更新植物信息（通过ID）
@app.route('/plants/<int:plant_id>', methods=['PUT'])
def update_plant(plant_id):
    data = request.get_json()
    with get_db() as db:
        cursor = db.cursor()
        query = """
            UPDATE plant SET
                category=?,
                family_serial_number=?,
                chinese_family_name=?,
                latin_family_name=?,
                chinese_genus_name=?,
                latin_genus_name=?,
                chinese_species_name=?,
                latin_species_name=?,
                author_of_the_species=?,
                rank_indicator=?,
                status=?,
                county_city_distribution=?,
                remarks=?
            WHERE id=?
        """
        cursor.execute(query, (
            data['category'],
            data['family_serial_number'],
            data['chinese_family_name'],
            data['latin_family_name'],
            data['chinese_genus_name'],
            data['latin_genus_name'],
            data['chinese_species_name'],
            data['latin_species_name'],
            data['author_of_the_species'],
            data['rank_indicator'],
            data['status'],
            data['county_city_distribution'],
            data['remarks'],
            plant_id
        ))
        db.commit()

    return jsonify({"message": "Plant updated successfully."}), 200


# 删除植物信息（通过ID）
@app.route('/plants/<int:plant_id>', methods=['DELETE'])
def delete_plant(plant_id):
    with get_db() as db:
        cursor = db.cursor()
        query = "DELETE FROM plant WHERE id=?"
        cursor.execute(query, (plant_id,))
        db.commit()

    return jsonify({"message": "Plant deleted successfully."}), 200


# 模糊查询（条件是哪个字段有值就作为其中一个模糊查询条件）
@app.route('/plants/search', methods=['POST'])
def search_plants():
    data = request.get_json()
    conditions = []
    params = []

    for key, value in data.items():
        if value is not None and key != 'id':
            conditions.append(f"{key} LIKE '%' || ? || '%'")
            params.append(value)

    if not conditions:
        return jsonify({"message": "No search criteria provided."}), 400

    condition_sql = " AND ".join(conditions)

    with get_db() as db:
        cursor = db.cursor()
        query = f"SELECT * FROM plant WHERE {condition_sql}"
        cursor.execute(query, tuple(params))
        results = cursor.fetchall()

    return jsonify(results), 200


if __name__ == '__main__':
    app.run()
