import os
import json

def renderPDF():
  with open('form.json') as json_data:
    d = json.load(json_data)
  formData = json.loads(data)
  
  #VV = r"""\def \formTopRadio{\uncheckedbox}
#\def \formTopPhone{\uncheckedbox}
#\def \formTopFax{\uncheckedbox}
#\def \formTopDFU{\uncheckedbox}
#\def \formTopCourier{\uncheckedbox}

#\def \formPrimaryDate{25.03.2018}
#\def \formPrimaryTime{17:23}
#\def \formPrimaryHdZ{xNA}

#\def \formSecondaryDate{25.03.2018}
#\def \formSecondaryTime{17:24}
#\def \formSecondaryHdZ{xDA}

#\def \formTertiaryDate{25.03.2018}
#\def \formTertiaryTime{17:34}
#\def \formTertiaryHdZ{xBV}

#\def \formNumberTB{467}
#\def \formIncoming{\uncheckedbox}
#\def \formOutgoing{\uncheckedbox}
#\def \formReceiverName{Gunni}

#\def \formMidRadio{\uncheckedbox}
#\def \formMidPhone{\uncheckedbox}
#\def \formMidFax{\uncheckedbox}
#\def \formMidDFU{\uncheckedbox}
#\def \formMidCourier{\uncheckedbox}

#\def \formCallAnouncement{\uncheckedbox}
#\def \formCallMessage{\uncheckedbox}

#\def \formPriorityInstant{\uncheckedbox}
#\def \formPriorityFlash{\uncheckedbox}

#\def \formCallNumber{0800555Nase}
#\def \formAddress{Weg 32}
#\def \formTalkNote{\uncheckedbox}

#\def \formContent{Bla toller Text\\\\}

#\def \formSender{}
#\def \formCreateTime{}
#\def \formIdentification{}
#\def \formPosition{}

#\def \formDocketTime{}
#\def \formDocketIdentification{}

#\def \formStationLeader{\uncheckedbox}
#\def \formStationSOne{\uncheckedbox}
#\def \formStationSTwo{\uncheckedbox}
#\def \formStationSThree{\uncheckedbox}
#\def \formStationSFour{\uncheckedbox}
#\def \formStationSSix{\uncheckedbox}

#\def \formAdvisorA{}
#\def \formAdvisorTickA{\uncheckedbox}
#\def \formAdvisorB{}
#\def \formAdvisorTickB{\uncheckedbox}
#\def \formAdvisorC{}
#\def \formAdvisorTickC{\uncheckedbox}
#\def \formAdvisorD{}
#\def \formAdvisorTickD{\uncheckedbox}
#\def \formAdvisorE{}
#\def \formAdvisorTickE{\uncheckedbox}

#\def \formConnectionA{}
#\def \formConnectionTickA{\uncheckedbox}
#\def \formConnectionB{}
#\def \formConnectionTickB{\uncheckedbox}
#\def \formConnectionC{}
#\def \formConnectionTickC{\uncheckedbox}
#\def \formConnectionD{}
#\def \formConnectionTickD{\uncheckedbox}
#\def \formConnectionE{}
#\def \formConnectionTickE{\uncheckedbox}

#\def \formAnnotations{Hier stehen Vermerke\\\\\\\\\\\\\\} 
#"""

  #file = open("variables.tex","w")
  #file.write(VV)
  #file.close()
  #os.system("pdflatex VVtest.tex")
  print('Fertig')
  return;


if __name__ == "__main__":
  renderPDF()
