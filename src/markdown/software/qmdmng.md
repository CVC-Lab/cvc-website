---
title: "Quality Multi-Domain Meshing with No Gap"
slug: "/software/qmdmng"
---
[![Brain Result](http://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2013/01/MMMNG_brain_result.jpg)](http://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2013/01/MMMNG_brain_result.jpg)

[![MMMNG_brain_mesh](http://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2013/01/MMMNG_brain_mesh.jpg "MMMNG_brain_mesh")](http://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2013/01/MMMNG_brain_mesh.jpg)

[![MMMNG_brain_Zoom](http://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2013/01/MMMNG_brain_Zoom.jpg "MMMNG_brain_Zoom")](http://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2013/01/MMMNG_brain_Zoom.jpg)

### Description

_QMDMNG_, Quality Multi-Domain Meshing with No Gap, produces a quality meshes with each one a two-dimensional manifold and no gap between two adjacent meshes. In other words, if two materials are adjacent to each other, the generated meshes share the same boundary. The input of this functionality is a classification map represented by a rawiv file. The output is multiple meshes and one mesh. The multiple meshes include one mesh for each material and they are two-dimensional manifold. Two meshes with duplicate vertices and triangles if they are adjacent to each other. The single mesh (a rawc file) includes one mesh which is the boundary of all domains and there is no duplicate vertices and triangles. Different color represents different surface patch.

### Download

*   _QMDMNG_ library can used through our volumetric visualization and processing front-end, [VolRover-2.0](../volumerover)
*   The user manual also can be found in [VolRover-2.0 User Guide](http://cvcweb.ices.utexas.edu/software/doc/VolumeRoverDoc.pdf)

### References
Q. Zhang, D. Cha, and C. Bajaj.   
**Quality boundary representation for multi-material objects**   
_Manuscript is being prepared for publication, 2013_