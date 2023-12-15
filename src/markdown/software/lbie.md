---
title: "LBIE"
slug: "/software/lbie"
---

![](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/lbie.1.jpg) ![](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/lbie.2.jpg) ![](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/lbie039.jpg) ![](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/lbie041.jpg)   
### Description 
_LBIE (Level Set Boundary-Interior-Exterior)_ is the multi-purpose meshing tool created at CVC which builds quality surface and volumetric mesh conforming to any level set from an imaging data. Variety of output mesh formats are

*   Triangle Mesh for the Level-Set and Tetrahedral Mesh for the interior and exterior to the level set.
*   Quadrilateral Mesh for the Level-Set and Hexahedral Mesh for the interior and exterior to the level set.
*   Triangle-Tet or Quad-Hex combination for interval volumes defined by two level sets.

### References

Y. Zhang, C. Bajaj   
**Adaptive and Quality Quadrilateral/Hexahedral Meshing from Volumetric Data**   
_Computer Methods in Applied Mechanics and Engineering, Volume 195, Issues 9-12, 1 February 2006, Pages 942-960._ ([pdf](http://www.sciencedirect.com/science?_ob=MImg&_imagekey=B6V29-4GBD6K2-3-1S&_cdi=5697&_user=108429&_orig=browse&_coverDate=02%2F01%2F2006&_sk=998049990&view=c&wchp=dGLbVtz-zSkzk&md5=def520c12757666aada843e2bb080a69&ie=/sdarticle.pdf))

Y. Zhang, C. Bajaj, B. Sohn   
**3D Finite Element Meshing from Imaging Data**  
_Computer Methods in Applied Mechanics and Engineering (CMAME) on Unstructured Mesh Generation, 194, 48-49, 5083-5106, 2005._ ([pdf](http://www.sciencedirect.com/science?_ob=MImg&_imagekey=B6V29-4G5BJD8-1-1K&_cdi=5697&_user=108429&_orig=browse&_coverDate=11%2F15%2F2005&_sk=998059951&view=c&wchp=dGLbVzz-zSkWb&md5=083ddd5d87592110f4a9404785719ed8&ie=/sdarticle.pdf))

Y. Zhang, G. Xu, C. Bajaj   
**Quality Meshing of Implicit Solvation Models of Biomolecular Structures**   
_The special issue of Computer Aided Geometric Design (CAGD) on Applications of Geometric Modeling in the Life Sciences, Volume 23, Issue 6, August 2006, Pages 510-530._ ([pdf](http://www.sciencedirect.com/science?_ob=MImg&_imagekey=B6TYN-4JVSV8J-1-1&_cdi=5623&_user=108429&_orig=search&_coverDate=08%2F31%2F2006&_qd=1&_sk=999769993&view=c&wchp=dGLbVlz-zSkzk&md5=39d744ba1e8bbc77f527cfe096a40a3e&ie=/sdarticle.pdf))

Y. Zhang, C. Bajaj, G. Xu   
**Surface Smoothing and Quality Improvement of Quadrilateral/Hexahedral Meshes with Geometric Flow**   
_Proceedings of 14th International Meshing Roundtable, pp. 449-468. San Diego, CA. September 11-14, 2005._

[Download](https://cvcweb.ices.utexas.edu/cvcwp/?page_id=1917) LBIE
-------------------------------------------------------------------

### Software Usage

*   **Installation:**
    LBIE library has the following requirements
    *   OS: Windows 2000, XP, Linux, Mac OSX
    *   [QT](http://www.trolltech.com/)
    *   a C++ compiler
*  **User Documentation:**
    *   [LBIE User Guide](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/doc/LBIEUserGuide.pdf)

### Further Details 
We developed an adaptive boundary and finite element mesher, namely, a Level Set Bounded Interior and Exterior(LBIE)-mesher that produces high quality meshes. This mesher has also been used for studying diffusion in biomolecular systems using continuum mechanics equations. Specifically, finite element methods have been developed to solve the steady-state Smoluchowski equation to calculate ligand binding rate constants for large biomolcules. The approach taken by our LBIE-mesher tetrahedralizes or hexahedralizes the interval volume between the biomolecular surface and an outer boundary sphere which is usually 20-40 times that of the biomolecule.

*   **Example of Application: The Human Heart**
    
    We converted a simple triangular surface mesh (describing the heart) into volumetric data using the signed distance method. We then extracted tetrahedral meshes from the volumetric data. These images are of the heart model with valve gaps. The meshes are adaptive tetrahedral meshes, with the valve areas set to the finest level of the mesh. (Click the image to enlarge.)
    
    A cross-section of the adaptive tetrahedral mesh of the heart
    
    [![Go to larger picture](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/cutaway-thumb.jpg)](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/cutaway.jpg)
    
    The view from outside
    
    [![Go to the interactive viewer](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/miniVolViewer-up.jpg)](/ccv/gallery/runMiniVolViewer.php?dataset=heart_sdf257.c2c)
    
    [![Go to larger picture](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/redheartmesh-thumb.jpg)](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/redheartmesh.jpg)
    
    The wireframe shows the inner structure of the heart
    
    [![Go to larger picture](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/wireframemesh-thumb.jpg)](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/wireframemesh.jpg)
    
    The result of boundary detection in wireframe, each of the twenty-two components of the heart model is represented by a different color
    
    [![Go to larger picture](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/boundaryDetection.gif)](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/boundaryDetection.jpg)
    
    A cross section of the adaptive tetrahedral mesh, it is obvious that the valves have the finest mesh, thin structures are identified by the feature sensitive error function, and adaptive meshes are generated to preserve correct topology.
    
    [![Go to larger picture](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/crossSection.gif)](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/crossSection.jpg)
    
    the aortic valve
    
    [![Go to larger picture](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/aortic.gif)](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/aortic.jpg)
    
    the mitral valve
    
    [![Go to larger picture](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/mitral.gif)](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/mitral.jpg)
    
    the pulmonary valve
    
    [![Go to larger picture](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/pulmonary.gif)](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/pulmonary.jpg)
    
    the tricuspid valve
    
    [![Go to larger picture](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/tricuspid.gif)](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/tricuspid.jpg)
    
    a cross section of the mitral valve before material layer detection
    
    [![Go to larger picture](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/pre-detection.gif)](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/pre-detection.jpg)
    
    a cross section of the mitral valve after material layer detection
    
    [![Go to larger picture](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLBIE/post-detection.gif)](http://www.cs.utexas.edu/%7Ebajaj/cvc/software/imagesLIBE/post-detection.jpg)
    
    **Credits**
    *   The original surface mesh of the heart model was acquired from New York University. Information about this virtual heart model can be found [here.](http://endeavor.med.nyu.edu/courses/embryology/courseware/vheart/)
    *   Meshes, and renderings created by Yongjie Zhang.
    
    **Collaborators**
    *   Wing Kam Liu (Northwestern University)
    *   Xiaodong Wang (Polytechnic University)
    *   Tom Hughes (ICES)