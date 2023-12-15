---
title: "ParIso"
slug: "/software/pariso"
---

Isocontour visualization for extremely large datasets poses challenging problems for both computation and rendering with guaranteed frame rates. Large isosurfaces are to be extracted in time-critical manner from those large datasets, whose sizes are from multi-gigabytes to terabytes. As the size of the input data increases, isocontouring algorithms necessarily need to be executed out-of-core and/or on parallel machines for both efficiency and data accessibility. Our scalable isosurface visualization solution on a commodity off-the-shelf cluster is an end-to-end parallel and progressive platform, from the initial data access to the final display. It partitions the volume data according to its workload spectrum for load balancing and creates an I/O-optimal external interval tree to minimize the number of I/O operations of loading large data from disk. It achieves scalability to arbitrary size data by using both parallel processing and parallel disks. Interactive browsing of extracted isosurfaces is made possible by using parallel isosurface extraction and rendering in conjunction with a new specialized piece of image compositing hardware called the Metabuffer.

![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/santa_100.jpg)

[![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/female1.jpg)](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/female1.jpg)  
A very large isosurface of the Visible Female (487,635,342 triangles)

[![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/femalered1.jpg)](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/femalered1.jpg)  
A Different view of the left isosurface

[![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/mmri1200.jpg)](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/mmri1200.jpg)  
The skeleton structure of the Visible Male MRI data (6,442,810 triangles)

[![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/mmri_7.gif)](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/mmri_7.gif)  
Load distribution of the Visible Male MRI data among 7 processors.

[![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/mmri_31.gif)](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/mmri_31.gif)  
Load distribution of the Visible Male MRI data among 31 processors.

[![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/female_64.gif)](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/female_64.gif)  
Load distribution of the Visible Female MRI data among 64 processors.

### Related Papers 
X. Zhang, C. Bajaj, W. Blanke   
**Scalable Isosurface Visualization of Massive Datasets on COTS-Cluster**   
_Proc. of IEEE 2001 Symposium on Parallel and Large-Data Visualization and Graphics, pg. 51-58, San Diego, CA, 2001_ [(pdf)](http://cvcweb.ices.utexas.edu/cvc/papers/2001/conference/pvg01.pdf)  

C. Bajaj, V. Pascucci, D.Thompson, X.Y. Zhang   
**Parallel Accelerated Isocontouring for Out-Of-Core Visualization,**   
In Proceedings of _IEEE Parallel Visualization and Graphics Symposium, October 24-29,1999 San Francisco, CA,_ pages 97 - 104. ([ps](http://cvcweb.ices.utexas.edu/cvc/papers/1999/conference/papera1.ps)) ([pdf](http://cvcweb.ices.utexas.edu/cvc/papers/1999/conference/papera1.pdf)