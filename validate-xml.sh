#!/bin/zsh
# A simple script to validate an xml file against the Aufwand.xsd 
# schema defined by Graebe for SWT Praktikum WS 17/18.
#
for f in $PWD/Documents/Aufwandsberichte/*.xml; do xmllint --noout --schema $PWD/Documents/Aufwandsberichte/Aufwand.xsd $f; done
