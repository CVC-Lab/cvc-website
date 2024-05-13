---
title: "PMEOPA"
slug: "/software/pmeopa"
---

_PMEOPA, a Parallel Molecular Energetics using Octree-based Pairwise Approximation, have been implemented in order to perform fast computation of molecular mechanical (Lennard-Jones and Coulombic) and generalized Born solvation energetics which run on commodity multi-core CPUs and GPUs._

### Features

- Supported computations

  - Lennard-Jones, Coulombic, molecular surface based effective Born radii, generalized Born polarization
  - For each terms,
    - parallel computation on GPUs using CUDA
    - parallel computation on multi-core using Cilk++
    - naive (n^2) computation for a comparison

### References

R. Chowdhury and C. Bajaj  
**Algorithms for faster molecular energetics, forces and interfaces**  
_ICES Technical Report 10-32_, The University of Texas at Austin, 2010.

### Dependencies

- Two main dependencies of **PMEOPA** are **Nvidia CUDA** ([https://developer.nvidia.com/cuda-downloads](https://developer.nvidia.com/cuda-downloads)) and **Intel Cilk++** ([http://software.intel.com/en-us/articles/download-intel-cilk-sdk](http://software.intel.com/en-us/articles/download-intel-cilk-sdk))

### Binaries

- [On Scientific Linux 6.3](http://cvcweb.ices.utexas.edu/software/binaries/PMEOPA-ScientificLinux6.3.tar.gz)

### Source

\* Currently the source code is distributed only for academic use. Users interested in commercial licensing should contact licensing@otc.utexas.edu     
\* [Request academic license](http://cvcweb.ices.utexas.edu/software/license/PMEOPA.license_mail.php)     
\* [Download source](http://cvcweb.ices.utexas.edu/cvcwp/?page_id=2477)

### Library Usage

- [Here](http://cvcweb.ices.utexas.edu/software/doc/PMEOPAUserGuide.pdf) is the user guide for PMEOPA which includes detailed installation and usage guide.
