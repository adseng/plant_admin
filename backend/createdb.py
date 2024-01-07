import sqlite3

# 连接到（或创建）数据库文件
conn = sqlite3.connect('plant.db')

# 创建游标对象
cur = conn.cursor()

# 编写创建表的SQL语句
# create_table_sql = """
# CREATE TABLE IF NOT EXISTS user (
#     id INTEGER PRIMARY KEY AUTOINCREMENT,
#     account TEXT NOT NULL,
#     pwd TEXT NOT NULL,
#     role TEXT
# );
# """

create_table_sql = """
CREATE TABLE IF NOT EXISTS plant (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT,
    family_serial_number TEXT,
    chinese_family_name TEXT,
    latin_family_name TEXT,
    chinese_genus_name TEXT,
    latin_genus_name TEXT,
    chinese_species_name TEXT,
    latin_species_name TEXT,
    author_of_the_species TEXT,
    rank_indicator TEXT,
    status TEXT,
    county_city_distribution TEXT,
    remarks TEXT
);
"""

# 执行SQL语句
cur.execute(create_table_sql)

# 提交事务
conn.commit()

# 关闭连接
conn.close()