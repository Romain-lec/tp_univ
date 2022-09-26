from PySide6.QtCore import *
from PySide6.QtGui import *
from PySide6.QtWidgets import *
import sys

class Dessin(QWidget):
#evenement QPaintEvent
    def __init__(self):
        super().__init__()
        self.setMouseTracking(True) # on active le mouseTracking
        self.cursorPos = None

    def mouseMoveEvent(self, event): # evenement mouseMove
        self.cursorPos = event.pos() # on stocke la position du curseur
        self.update() # on met à jour l'affichage
        #evenement QPaintEvent

    def paintEvent(self, event):
        painter = QPainter(self)
        path= QPainterPath()
        pen = QPen()
        pen.setColor(Qt.red)
        painter.setPen(pen)
        painter.setBrush(Qt.lightGray)
        painter.setRenderHint(QPainter.Antialiasing)
        if self.cursorPos != None:
            #painter.drawEllipse(\
                #self.cursorPos.x()-50,\
                #self.cursorPos.y()-50,100,100)
            path.addText(QPointF(self.cursorPos.x()-75,self.cursorPos.y()+25),QFont('SansSerif',20),"RuptuSûre : pas cher -70 %")
            painter.drawPath(path)
        self.setCursor(Qt.BlankCursor)
        
def main(args):
    app = QApplication(args)
    win = QMainWindow()
    win.setCentralWidget(Dessin())
    win.resize(500,500)
    win.show()
    app.exec_()

if __name__ == "__main__" :
    main(sys.argv)
