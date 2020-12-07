from random import random

prefix = 'BG-'
sufix = '-JS9'

fo = open('indeksi.txt','w')
for i in range(30):
    fo.write(prefix + str(round(random() * 899 + 100)) + sufix + '\n')
