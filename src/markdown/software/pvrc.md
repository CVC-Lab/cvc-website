---
title: "PVRC"
slug: "/software/pvrc"
---

![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/cut5.jpg)

![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/cut3.jpg)

![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/cut8.jpg)

![](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/cut7.jpg)

Figure 1: Parallel volume ray-casting images from compressed Visible Human male CT

- [Movie1 (1.4 MB)](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/vh_cutp2_s.mpeg)
- [Movie2 (3.1 MB)](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/vh_cutp1_s.mpeg)
- [Movie3 (1.4 MB)](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/muscle_s.mpeg)
- [Movie4 (1.4 MB)](https://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2018/05/vm256.mpeg)

Visualizing very large volume data such as the Visible Human dataset requires a great deal of computing time and memory space. In particular, ray-casting such volume data is one of the most compute- and memory-intensive tasks for volume rendering, while the ray-casting algorithm produces the highest quality of rendered images. The motivation for this work is to develop an effective parallel ray-casting scheme for visualization of very large volume data on distributed systems. We are particularly concerned with parallel ray-casting of the Visible Human datasets, on a Cray T3E and SGI Onyx2. Our new method tries to achieve high performance by minimizing communications between processing elements during rendering through compression, hence is also very appropriate for more practical distributed systems, such as clusters of PCs and/or workstations, in which data communications between processors are regarded as quite costly.

Our parallel ray-casting scheme is different from the previous approaches in that it is based on a compression method that is well-suited for developing interactive applications. We developed a new compression method, based on 3D wavelets, that provides very fast random access ability to compressed volume data. Most parallel rendering algorithms for very large volumes partition the data into subblocks that can fit into local memory of processing elements, and distribute them over the local memory spaces in the system. During rendering, load balancing is usually done dynamically for efficiency, and this often causes data redistribution between processing elements. The data redistribution, or remote memory fetch, when implemented carelessly, is one of the most serious factors that deteriorate the speedup of parallel volume rendering, especially when the data is very large.

In our implementation, the whole CT dataset of the Visible male is compressed, and is replicated at each processing element. Since the entire dataset that is necessary for generating image segments, is available at the local memory, no data communication is needed between processors for data redistribution. The compression method we use, guarantees very quick random access which is faster than remote data fetch, hence produces a better speedup than the previous methods based on data redistribution.

### _Papers_

C. Bajaj, I. Ihm, and S. Park, "Parallel Ray Casting of Visible Human on Distributed Memory Architectures",  
**_VisSym '99 (Joint EUROGRAPHICS-IEEE TCVG Symposium on Visualization)_**, pages 269-276, Vienna, Austria, May 1999. [\[pdf\]](http://cvcweb.ices.utexas.edu/cvc/papers/1999/conference/VisSym99.pdf)

C. Bajaj, I. Ihm, and S. Park, "Compression-Based Ray Casting of Very Large Volume Data in Distributed Environments",  
**_HPC-Asia '00_**, pages 720-725, Beijing, China, May 2000. [\[pdf\]](http://cvcweb.ices.utexas.edu/cvc/papers/2000/conference/hpca00.pdf)
