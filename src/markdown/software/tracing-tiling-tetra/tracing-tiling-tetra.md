---
title: "Arbitrary Topology Shape Reconstruction from Planar Cross Sections"
slug: "/software/tracing-tiling-tetra"
---

In computed tomography, magnetic resonance imaging and ultrasound imaging, reconstruction of the 3D object from the 2D scalar-valued slices obtained by the imaging system is difficult because of the large spacings between the 2D slices. The aliasing that results from this undersampling in the direction orthogonal to the slices leads to two problems known as the correspondence problem and the tiling problem. A third problem known as the branching problem arises because of the structure of the objects being imaged in these applications. Existing reconstruction algorithms typically address only one or two of these problems.We approach all three of these problems simultaneously. This is accomplished by imposing a set of three constraints on the reconstructed surface and then deriving precise correspondence and tiling rules from these constraints. The constraints ensure that the regions tiled by these rules obey physical constructs and have a natural appearance. Regions which cannot be tiled by these rules without breaking one or more constraints are tiled with their medial axis (edge Voronoi diagram).Our implementation of the above approach generates triangles of 3D isosurfaces from input which is either a set of contour data or a volume of image slices. Results obtained with synthetic and actual medical data are presented. There are still specific cases in which our new approach can generate distorted results, but these cases are much less likely to occur than those which cause distortions in other tiling approaches.

![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/06/brain.jpg)

Visualization of a reconstructed brain hemisphere (37,992 triangles)

![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/06/brain_wire.jpg)

The wire frame of a reconstructed brain hemisphere (37,992 triangles)

![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/06/skull_all.jpg)

(a) Visualization of a reconstructed skull(54,071 triangles) (b) & (c) The contours of two adjacent slices around the nostril (d) The tiling between (b) and (c)

![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/06/freddy.jpg)

Visualization of an entire human skeleton (Freddy) (285,349 triangles)

![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/06/freddy_tile.jpg)

Tiling results of some portions of Freddy

Some of these models are being used in a [virtual human-body walk-through](walkthrough)
