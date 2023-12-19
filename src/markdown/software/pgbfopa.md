---
title: "PGBFOPA"
slug: "/software/pgbfopa"
---
_PGBFOPA_, a Parallel Generalized Born Force using Octree-based Pairwise Approximation, have been implemented in order to perform fast computation of generalized Born polarization force with molecular surface-based formula using commodity multi-core CPUs and GPUs.

### Features

*   Supported computations: atomic force for the generalized Born polarization with::
    *   parallel computation on GPUs using CUDA
    *   parallel computation on multi-core using Cilk++
    *   naive $(n^2)$ computation for a comparison

  
### References
R. Chowdhury and C. Bajaj   
**Algorithms for faster molecular energetics, forces and interfaces**    
_ICES Technical Report 10-32_, The University of Texas at Austin, 2010.

### Dependencies

*   Two main dependencies of **PGBFOPA** are **Nvidia CUDA** ([https://developer.nvidia.com/cuda-downloads](https://developer.nvidia.com/cuda-downloads)) and **Intel Cilk++** ([http://software.intel.com/en-us/articles/download-intel-cilk-sdk](http://software.intel.com/en-us/articles/download-intel-cilk-sdk))

### Binaries
*   [On Scientific Linux 6.3 with CUDA 4.2](http://cvcweb.ices.utexas.edu/software/binaries/PGBFOPA.bin.r6464.ScientificLinux6.3.tar.gz)

### Source
\* Currently the source code is distributed only for academic use. Users interested in commercial licensing should contact licensing@otc.utexas.edu   
\* [Request academic license](http://cvcweb.ices.utexas.edu/software/license/PGBFOPA.license_mail.php)  
\* [Download source](http://cvcweb.ices.utexas.edu/cvcwp/?page_id=2535)

### Library Usage

*   [Here](http://cvcweb.ices.utexas.edu/software/doc/PGBFOPAUserGuide.pdf) is the user guide for PGBFOPA which includes detailed installation and usage guide.
