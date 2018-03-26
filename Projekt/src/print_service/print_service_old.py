import os

VV =
VV = r"""\documentclass[a5paper,6pt]{article}
\usepackage[a5paper]{geometry} 
\usepackage[ngerman]{babel}
%\usepackage[latin1]{inputenc}
\usepackage[utf8x]{inputenc}
\usepackage[T1]{fontenc}
\geometry{a5paper,left=5mm, right=5mm, top=5mm, bottom=5mm} 
\usepackage{amssymb}
\usepackage{verbatim}
\usepackage{graphicx}
\usepackage{colortbl}
\usepackage{rotating}
\usepackage{tabularx}
\usepackage{lipsum}
\setlength{\tabcolsep}{0.25em}

\def \ew{0.27}
\def \ehs{17pt}
\def \duhhs{\hspace{0pt}}

\def \datum{27.03.1990}
\def \uhrzeit{15:32}
\def \hdz{x4}
\def \nr{5}
\def \checkedbox{\boxtimes}
\def \uncheckedbox{$\square$ }
\def \duh{Datum\duhhs&\duhhs Uhrzeit\duhhs&\duhhs Hdz.\duhhs}
%\def \tbox#1{\fbox{ \parbox{20pt}{\centering #1}}}
\def \tbox#1{
	\begin{tabularx}{20pt}{|X|}
		\hline
		 #1 \\
		\hline
	\end{tabularx}
	\vspace{-0.5pt}
}
\begin{document}
\small 
\textbf{}\\
\begin{minipage}{\textwidth}
\begin{tabular}{|c|c|c|c|c|c|c|c|c|}
	\hline
	\multicolumn{9}{|l|}{\quad \uncheckedbox Funk \hspace{\ehs} \uncheckedbox Telefon \hspace{\ehs} \uncheckedbox Telefax \hspace{\ehs}  \uncheckedbox DFÜ \hspace{\ehs}  \uncheckedbox Kurier/Melder}   \\
	\hline
	\multicolumn{3}{|c|}{\textbf{Eingang}} & \multicolumn{6}{c|}{\textbf{Ausgang}}\\
	\hline
	\multicolumn{3}{|c|}{Aufnahmevermerk} & \multicolumn{3}{c|}{Annahmevermerk} & 	\multicolumn{3}{c|}{Beförderungsvermerk}\\
	\multicolumn{3}{|c|}{} & \multicolumn{3}{c|}{} & \multicolumn{3}{c|}{}\\
	\datum & \uhrzeit  & \hdz & \datum & \uhrzeit  & \hdz &	\datum & \uhrzeit  & \hdz \\
	\hline
	\textsubscript{1}\duh  & \textsubscript{2}\duh &\textsubscript{3}\duh \\
	\hline
\end{tabular}
\hspace{-9.5pt}
\renewcommand{\arraystretch}{1.228}
\begin{tabular}{l|}
	\hline
	\textbf{Technisches}\\
	\textbf{Betriebsbuch}\\
	\quad Nr. \nr \\
	\hspace{11.3pt} \uncheckedbox Eingang\\
	\textsubscript{4} \hspace{4pt} \uncheckedbox Ausgang 	\vspace{0pt}\\
	\hline
\end{tabular}
\vspace{-1pt}
\end{minipage}
\begin{minipage}{\textwidth}
\begin{tabularx}{0.9913\textwidth}{|l|X|}
\hspace{4pt} Rufname der Gegenstelle \hspace{20pt} & Textdfsf \\
\textsubscript{5} Spruckknopf & Text\\
\hline
\end{tabularx}
\vspace{-1.5pt}
\end{minipage}
\begin{minipage}{\textwidth}
\begin{tabularx}{0.9913\textwidth}{|X X X X X|}
\textsubscript{6} \uncheckedbox Funk & \uncheckedbox Telefon & \uncheckedbox Telefax &  \hspace{9.8pt}\uncheckedbox DFÜ &  \uncheckedbox Kurier/Melder\\
\hline
\textsubscript{7} \uncheckedbox Durchsage & \uncheckedbox Spruch &   & \textsubscript{ 8} \uncheckedbox Sofort &  \uncheckedbox Blitz\\
\hline
\end{tabularx}
\vspace{-1.2pt}
\end{minipage}
\begin{minipage}{\textwidth}
\begin{minipage}{0.2\textwidth}
\renewcommand{\arraystretch}{2}
\begin{tabularx}{\textwidth}{|X|}
\textsubscript{9} Anschrift\\
\hline
\hspace{7.8pt}Ruf Nr.
\end{tabularx}
\end{minipage}
\begin{minipage}{0.5755\textwidth}
df
\end{minipage}
\begin{minipage}{0.2\textwidth}
\begin{tabularx}{\textwidth}{|X|}
\centering	GESPRÄCHS- \tabularnewline
\centering	NOTIZ \tabularnewline
\hline
\centering \uncheckedbox \tabularnewline
\textsubscript{10}
\end{tabularx}
\end{minipage}
\vspace{-1.5pt}
\end{minipage}
\begin{minipage}{\textwidth}
\begin{tabularx}{0.9913\textwidth}{|p{72.7pt}|X|}
\hline
\textsubscript{11} Inhalt & \\
\hline
\end{tabularx}
\vspace{-1.5pt}
\end{minipage}
\begin{minipage}{\textwidth}
	\begin{tabularx}{0.9913\textwidth}{|X|}
		\lipsum[1-2]\\
		\hline
	\end{tabularx}
\vspace{-1pt}
\end{minipage}
\begin{minipage}{\textwidth}
	\begin{tabularx}{0.9913\textwidth}{|p{72.7pt}|X|}
		\textsubscript{12} Absender & \\
		\hline
	\end{tabularx}
	\vspace{-1.5pt}
\end{minipage}
\begin{minipage}{\textwidth}
	\begin{tabularx}{0.9913\textwidth}{|p{72.7pt}|X|X|}
		Abfassungzeit & & \\
		\hline
		\multicolumn{2}{|l|}{\textsubscript{13} \hspace{80pt} Einheit/Einrichtung/Stelle} & \textsubscript{14}Zeichen \hspace{40pt} Funktion \\
		\hline
	\end{tabularx}
	\vspace{-2.5pt}
\end{minipage}
\begin{minipage}{\textwidth}
\begin{tabularx}{0.5956\textwidth}{|X|X|}
	Quittung & Quittunstext\\
	\hline
	\multicolumn{1}{|X}{\textsubscript{15}} & \multicolumn{1}{X|}{ Uhrzeit \hspace{40pt} Zeichen}\\
	\hline
	\multicolumn{2}{|X|}{
		\begin{tabularx}{0.5956\textwidth}{X X X X}
			\multicolumn{2}{p{90pt}}{TEL/EL/EAL/UEAL} & Fachberater & Verb.stellen\\
			\uncheckedbox Leiter& \uncheckedbox \tbox{S1} & \uncheckedbox \tbox{}& \uncheckedbox \tbox{}\\
			& \uncheckedbox \tbox{S2} & \uncheckedbox \tbox{} & \uncheckedbox \tbox{}\\
			& \uncheckedbox \tbox{S3} & \uncheckedbox \tbox{} & \uncheckedbox \tbox{}\\
			& \uncheckedbox \tbox{S4} & \uncheckedbox \tbox{} & \uncheckedbox \tbox{}\\
			& \uncheckedbox \tbox{S6} & \uncheckedbox \tbox{} & \uncheckedbox \tbox{}\\
		\end{tabularx}
		\vspace{1pt}
	}\\
	\hline
\end{tabularx}
\hspace{-6.4pt}
	\begin{minipage}{0.3963\textwidth}
		\begin{tabularx}{\textwidth}{X|}
			\textsubscript{17}Vermerke \\
			\hline
		\end{tabularx}\\
		\renewcommand{\arraystretch}{7.65}
		\begin{tabularx}{\textwidth}{X|}
			 \\
			\hline	
		\end{tabularx}
	\end{minipage}

\end{minipage}
\end{document}"""

file = open("VVtest.tex","w")
file.write(VV)
file.close()
os.system("pdflatex VVtest.tex")
