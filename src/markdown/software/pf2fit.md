---
title: "PF2Fit"
slug: "/software/pf2fit"
---
_PF2Fit, a Polar Fast Fourier Fitting library, is a rigid-body fitting library that uses PFCorr, a non-uniform SO(3) Fourier-based scheme. A new generalized framework was developed to fit crystal structures into density maps. The framework includes three new scoring functions that quantify the goodness of fit between the crystal structure and density map: the scattering potential score, which is based on using a more realistic representation of the input crystal structure in terms of the density map, the non-uniform exterior penalty, which efficiently penalizes atoms outside a certain isocontour of the target density map, and the skeleton-secondary structure score, which correlates the skeleton of the density map with secondary structural elements in the crystal structure. The framework also includes a search scheme based on non-uniform correlations over the space of rotations SO(3), and a reranking stage that improves confidence in fitting results obtained during the initial search stage._

[![rigid-fitting](http://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2012/09/rigid-fitting.jpg "rigid-fitting")](http://cvcweb.ices.utexas.edu/cvcwp/wp-content/uploads/2012/09/rigid-fitting.jpg) 
  
**Features**
*   Supported operations
    *   Rigid-body fitting of crystal structure (PDB) to density map (3D EM)

**References**

R. Bettadapura, C. Bajaj, A. Vollrath   
**PF2Fit: Fitting Atomic Structures in 3D EM**   
_ICES Technical Report 12-27_, The University of Texas at Austin, 2012. ([pdf](http://cvcweb.ices.utexas.edu/cvc/papers/2012/report/Pf2Fit-TechReport.pdf))

### Binaries

*   [Linux executable](http://cvcweb.ices.utexas.edu/cvc/Software/pf2fit-executable-only.zip) (64-bit) with sample (model, map and input file).
*   [Rotational sampling files](http://cvcweb.ices.utexas.edu/cvc/Software/samplingFiles.zip) required to run PF2Fit
*   [T-matrix files](http://cvcweb.ices.utexas.edu/cvc/Software/GTO-TMatrix.zip) used for translational sampling (Note: large file)
*   A [complete package](http://cvcweb.ices.utexas.edu/cvc/Software/fitting-distribution.zip) containing all of the above (Note: large file)

*   [converter](http://cvcweb.ices.utexas.edu/cvc/Software/volconvert) to generate .rawiv files (used by Pf2Fit) from .map files (common format in EMBL-EBI)

### Source

\* Currently the source code is distributed only for academic use. Users interested in commercial licensing should contact licensing@otc.utexas.edu  
\* [Request academic license](http://cvcweb.ices.utexas.edu/software/license/Fitting.license_mail.php)   
\* [Download source](http://cvcweb.ices.utexas.edu/cvcwp/?page_id=2385)

### Library Usage

*   [Here](http://cvcweb.ices.utexas.edu/tutorial/Fitting/PFFit-Tutorial.pdf) is the user guide for our flexible fitting libraries including **PF2Fit**.