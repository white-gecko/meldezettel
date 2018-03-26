import os

VV = 
file = open("VVtest.tex","w")
file.write(VV)
file.close()
os.system("pdflatex VVtest.tex")
