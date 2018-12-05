/**
 * oscP5sendreceive by andreas schlegel
 * example shows how to send and receive osc messages.
 * oscP5 website at http://www.sojamo.de/oscP5
 */
 
import oscP5.*;
import netP5.*;

PImage img;
OscP5 oscP5;
NetAddress myRemoteLocation;

void setup() {
  size(800,600);
  frameRate(25);
   img = loadImage("emoji-1.png");
  /* start oscP5, listening for incoming messages at port 12000 */
  oscP5 = new OscP5(this,3333);
 
}

String oscMessage = "null";
void draw() {
  image(img, 50, 0);
  background(0);
  textSize(32);
  text(oscMessage, 10, 30); 
  fill(0, 102, 153);
}



/* incoming osc message are forwarded to the oscEvent method. */
void oscEvent(OscMessage theOscMessage) {
  /* print the address pattern and the typetag of the received OscMessage */
  println("### received an osc message with addrpattern "+theOscMessage.addrPattern()+" and typetag "+theOscMessage.typetag());
  oscMessage = theOscMessage.addrPattern();
  redraw();
  
}
