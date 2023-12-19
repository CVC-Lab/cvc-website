---
title: "Virtual Human Body Walkthrough"
slug: "/software/tracing-tiling-tetra/walkthrough"
---
The goal of this project is to create a synthetic environment where a user can walk through the human body, examine the details of the body parts, and query information about them. In addition to conventional query by name or index, we emphasize on fast spatial query, and fast query by joints. We attempt to create a 3D geometric model of the human body structure based on slice data and contour data, support cross-referencing between these different representations, and support queries based on different representations. The spatial queries will retrieve the spatial, physical, and metric information about an geometric object. We also attempt to create and test functional models based on the geometry and topology of the objects. Joints are another kinds of access paths to the objects connected to them. The joint structure helps simulate the kinematics of the objects. To achieve these goals, we need to apply effective modeling, reconstruction and visualization techniques. Since the spatial database can be quite large, efficient storage management techniques are also explored.

In building the synthetic environment, we first experience with the skeleton of the human body. Following are two examples of the objects in the database. Here is a list of _bones_ in the hierarchical structure of the skeleton.

### Major Issues

**Anatomical Database**
*   Skeletal, Tissue, Vascular
*   Multiple Modality Data
    *   Image slices
    *   Iso-contours
    *   Polygonal objects
    *   Multiple levels of details
        *   Mesh decimation
        *   Wavelet transform
*   Data Organization of the Skeletal Model

### Model Creation and Manipulation

*   Image slice acquiring
*   Iso-contours generation
*   Reconstruction from slices
*   Finite element models

### Spatial Search Structures

*   Spatial query

### Interrogative Visualization

*   Metrics query

### Simulation and Collision Detection

*   Joint modeling and kinematics

### Collaborative Interfaces

**Papers for the Visible Human Project Conference, 1996**

C. Bajaj, F. Bernardini, E. Sacks, D. Schikore and K. Lin. **Physical simulation of the visible human joints**.  
Proc. of the _Visible Human Project Conference_, Natl. Library of Medicine, Washington D.C., Oct. 1996.

C. Bajaj, F. Bernardini, V. Pascucci and D. Schikore.  
**Interrogative visualization of the visible human datasets**.  
Proc. of the _Visible Human Project Conference_, Natl. Library of Medicine, Washington D.C., Oct. 1996.

### Papers

C. Bajaj, E. Coyle, K. Lin  
**"Arbitrary Topology Shape Reconstruction from Planar Cross Sections''**  
Full version submitted for publication in _Graphical Models and Image Processing (1996)_,  
Fourth SIAM Conference on Geometric Design, Nashville, Tennesse (Nov. 1995) ([pdf](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/06/paper1.pdf))

C. Bajaj, F. Bernardini, E. Sacks, D. Schikore and K. Lin.  
**"Physical simulation of the visible human joints."**  
Proceedings of the Visible Human Project Conference, Natl. Library of Medicine, Washington D.C., Oct. 1996.

C. Bajaj, F. Bernardini, V. Pascucci and D. Schikore.  
**"Interrogative visualization of the visible human datasets."**  
Proceedings of the Visible Human Project Conference, Natl. Library of Medicine, Washington D.C., Oct. 1996.

### Some Examples of the Model

*   **Skeleton**
*   **[Hand](../hand)**
*   **Skeletal hierarchy**
*   **SGI movie of the skeleton**