---
title: "Quality Multi-Domain Meshing"
slug: "/software/qmdm"
---
QMDM (Quality Multi-Domain Meshing) produces a high quality, mutually consistent triangular surface meshes for multiple domains. Note: Our previous multi-domain meshing software can be found [here](http://www.cs.utexas.edu/~bajaj/cvc/software/MMM.shtml).  

![](http://cvcweb.ices.utexas.edu/images/qmdm-braina.png "qmdm-braina") 
 
![](http://cvcweb.ices.utexas.edu/images/qmdm-brainb.png "qmdm-brainb")
 
![](http://cvcweb.ices.utexas.edu/images/qmdm-brainc.png "qmdm-brainb")   
First row: original brain data and the resulting multi-domain mesh. Second row: zoomed-in view of mesh quality and a cut view of the consistent multi-domain mesh.   

A point cloud is generated from a preliminary mesh representing the boundary between different domains from the discrete volumetric representation used as input.  

A higher-order level-set method is  employed to produce a quality sub-mesh from this point cloud and geometric flow is used as smoothing mechanism.   

An approach is developed to detect and curate intersections within an assembly of these 2-manifold sub-meshes by utilizing the intermediate volumetric representation. The separation between sub-meshes can be controlled by the user using a gap threshold parameter.  

The resulting  high quality multi-domain mesh is free from self- and inter-domain intersections and can be further utilized in finite element and boundary element computations. 

### References  
Q. Zhang, B. Subramaniam, G. Xu and C. Bajaj   
**Quality Multi-domain Meshing for Volumetric Data**  
_3rd International Conference on Biomedical Engineering and Informatics, 2010, pp. 472-476._

### Download

*   _QMDM_ library now imported into our volumetric visualization and processing front-end, [VolRover-2.0](../volumerover)
*   The user manual also can be found in [VolRover-2.0 User Guide](http://cvcweb.ices.utexas.edu/software/doc/VolumeRoverDoc.pdf)
*   Old binaries   
    Mesh generation is provided in two steps.   
    Linux Binaries: [MMHLS-genRawV](http://cvcweb.ices.utexas.edu/software/binaries/MMHLS-genRawV.20110203), [MMHLS-genMesh](http://cvcweb.ices.utexas.edu/software/binaries/MMHLS-genMesh.20110203)
*   User Guide   
    See the [user guide](http://cvcweb.ices.utexas.edu/software/doc/QMDM-userguide.txt) for information on running the programs.
*   Source Package

### Further details  
![](http://cvcweb.ices.utexas.edu/images/qmdm-pipeline.png "qmdm-pipe")  
Quality Multi-Domain Meshing pipeline.  

Our method involves a number several steps listed below.

**A. Segmentation and Classification**  
Current multi-seeded fast marching methods are used to segment 3D density maps into individual domains of interest.

**B. Point Cloud Generation**  
B1. Partition surface extraction   
B2. Preliminary smoothing (Geometric flow scheme)   
B3. Point cloud generation

**C. Higher-Order Level Set Method Based Surface Reconstruction**  
The reconstructed smooth surface is represented by the level set of a tri-cubic B-spline function.

**D. Intersection Detection and Curation**  
See the reference for details.   

D1. Intersection detection   
D2. Intersection curation 

![](http://cvcweb.ices.utexas.edu/images/qmdm-schemea.png "qmdm-schemea") ![](http://cvcweb.ices.utexas.edu/images/qmdm-schemeb.png "qmdm-schemeb")   
2D schematic illustration of detection and curation of intersections. (A) Original meshes. (B) Meshes with isosurfaces. (C) Isocontours generated for each mesh. (D) Evolution directions. (E) After evolution. (F). Separated intersection-free meshes. 

![](http://cvcweb.ices.utexas.edu/images/qmdm-psv.png "qmdm-psv") 3D intersection curation. Figure (A) shows the partition mesh after geometric flow smoothing. (B) and (C) show two different views for the thin shell in figure (A). (D) shows the result after point clouds reconstruction by higher-order level-set method and intersection detection and curation. (E) and (F) show two different views for the thin shell in figure (D).