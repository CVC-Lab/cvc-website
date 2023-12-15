---
title: "PF3Fit"
slug: "/software/pf3fit"
---
_PF3Fit, a Polar Fast Fourier Flexible Fitting library, is a flexible fitting library that uses hierarchical approach as well as a non-uniform SO(3) Fourier-based scheme. It uses scoring functions that account for steric clashes while maximizing the degree of fit between the protein and the density map, a non-uniform rotationally exhaustive Fourier-based search scheme, and a flexibility model that parametrizes shear and hinge bending motions available to each protein domain. This framework rests on a hierarchical domain decomposition of the input protein, whereby domains at one level in the hierarchy are split into subdomains at the next level. Our flexible fitting technique can quickly and efficiently search over the space of motions available to the domains of a protein at each level in the hierarchy, and yields flexible fits that compare favorably with existing pre-MD as well as all-atomistic MD-based flexible fitting schemes. More importantly, our flexible fitting technique is capable of annotating the kind and degree of motion that each domain undergoes, making it a useful tool to analyze protein conformational change in cases where only a protein and density map are available._

 [![flexible-fitting](http://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2012/09/flexible-fitting.jpg "flexible-fitting")](http://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2012/09/flexible-fitting.jpg)
 
 **Features**

*   Supported operations
    *   Flexible fitting of crystal structure (PDB) to density map (3D EM)
  
**References**

R. Bettadapura, C. Bajaj, A. Vollrath   
**PF3Fit: Hierarchical Flexible Fitting in 3D EM**    
_ICES Technical Report 12-28_, The University of Texas at Austin, 2012. ([pdf](http://cvcweb.ices.utexas.edu/cvc/papers/2012/report/Pf3Fit-TechReport.pdf))

### Binaries

*   binaries will be posted soon

### Source

\* Currently the source code is distributed only for academic use. Users interested in commercial licensing should contact [Jitendra Jain](mailto:jjain@otc.utexas.edu).     
\* [Request academic license](http://cvcweb.ices.utexas.edu/software/license/Fitting.license_mail.php)     
\* [Download source](http://cvcweb.ices.utexas.edu/cvcwp/?page_id=2385)

### Library Usage

*   [Here](http://cvcweb.ices.utexas.edu/tutorial/Fitting/PFFit-Tutorial.pdf) is the user guide for our flexible fitting libraries including **PF3Fit**.