---
title: "MTD"
slug: "/software/mtd"
---
### Performer Libraries Using Chromium

For more information on chromium, see my [chromium page](https://www.cs.utexas.edu/~bajaj/cs395T02/molecular/astro/chromium.html) for links and code  
Attempts to run the performer libraries through chromium were hindered by two problems:  
  
1: Chromium does not yet support glXcreateContext  
  
2: There is no built in way to communicate between the server host ( the "Chromium Mothership" ) and the server running the application faker ( "crappfaker" ).  
  
These two problems coupled with the class time constraints forced a search for an alternative solution.

### The Alternative Solution: Python Message Passing

The solution to the multi-tiled display problem requires:  
  
1: Ability to send messages across different platforms ( e.g. SGI <--> LINUX )  
  
2: Ability to specify which processor controls which display  
  
3: Require minimal changes in the source code of an application  
  
Python can satisfy these requirements with a sufficient message passing interface. A simple message server was created to emulate MPI's broadcast command using tcp/ip.  
  
See the source for an example [server](https://www.cs.utexas.edu/~bajaj/cs395T02/molecular/astro/server.py) and an example [client](https://www.cs.utexas.edu/~bajaj/cs395T02/molecular/astro/in_client.py)

### What the code does

Using the python message passing discussed above, python was embedded into SGI's perfly code. As a first iteration in this experiment, only the mouse structure was passed between machines. This ensures that any interaction with perfly on the server host will be mirrored in all the different perfly programs running on the displays. The same technique could be applied to the Chromium system to achieve communication between the host and the displays.  
  
Due to time constraints, the data decomposition has not been parallelized. Thus each display node must have enough memory to load up the entire data set in these first attempts.  
  
The source code changes consist of the following:  
  
in common/main.C: embed the python message passing to communicate the mouse structure  
  
in common/generic.C: change PreFrame() so that the client perfly version will not listen to mouse events  
  
And that's it!

Modifications can be found [here](https://www.cs.utexas.edu/~bajaj/cs395T02/molecular/astro/common.tar.gz)  
  
The modifications only occur in the "common" directory, so only that is included.

### What is the input/output?

The code will read any format that the standard perfly distribution will read.  
  
As long as the entire data set is placed on each rendering node, the data can be visualized and interacted with on an arbitrary number of screens, regardless of the operating system of the rendering node.

### What are the lessons learned

The principle lesson learned is the difficulty finding a system that adequated resolves the multi-tiled display problems. Even promising programs such as Chromium ( formerly WireGL ) are not quite up to addressing the challenges of using a complicated browser across platforms for multi-tiled displays.  
  
The second lesson learned is the relative simplicity with which communication across platforms can be accomplished using Python to achieve multi-tiled display interactivity.