---
title: "Dynamic Mode Decomposition"
slug: "/projects/dmd"
date: "2021-11-16"
---

## What are we trying to do?

The data-driven approach to dynamical system analysis builds upon the great success of modern machine learning and the abundance of data, from both measurements and simulations. Data-driven methods can be advantageous in situations where traditional numerical solvers cannot be applied, e.g., unknown governing equations or partial observations. A primary example of such methods is dynamic mode decomposition (DMD) which approximates the dominant modes of system dynamics through operator inference. DMD, as well as related methods for reduced order modeling and dimensionality reduction, are widely used across engineering and scientific disciplines.

## What is the problem?

While the theory of DMD is well-developed in relation to Koopman spectral analysis, providing a characterization of its convergence, the DMD formulation is limited in a number of critical ways. First, it is often necessary to extract more expressive features from observation data using a set of non-linear feature maps. While this need is addressed by the extended DMD (EDMD), it is still assumed that a dictionary of feature maps can be provided a priori. Second, operator inference relies on algebraic operations that do not scale well to high-dimensional inputs. Third, the DMD formulation does not readily capture the relationship between observables, making it difficult to control the accuracy of structured predictions.

## What we’re doing

We draw inspiration from compressive sensing and variational inference to side-step the traditional DMD analysis workflow. Naturally occuring datasets often exhibit redundancy which can be exploited to achieve compression, as well as reduce the computational burden on basic algebraic operations on matrices and tensors. This notion can be made precise using tools from compressive sensing and numerical linear algebra. In addition, we build upon recent advances in deep variational auto-encoders to obtain a unified framework for learning both the feature embedding and corresponding latent dynamics following in an unsupervised learning fashion guided by simple constraints from observed transition dynamics. This end-to-end learning approach makes it easier to accommodate more desirable features such as the sparsity of the representation, approximating the dynamics using as few modes as possible, further promoting the interpretability of the learned representations. In addition, we consider an enhanced variational formulation that takes into account the observered relationship between observables preserving such underlying structures in the output predictions.

## Progress

To answer the first challenge of providing effective feature mappings, we study a deep learning approach to DMD. We study the GEMS dataset obtained by simulating a combustion engine model, where the geometry is captured by a 2D point set as shown below. Each sample point provides multiple measurements, e.g., preassure, 2D velocity, and molar concentrations. 

![](https://i.imgur.com/Awxwo3k.png)


To limit the computational overhead of the data-driven approach, we begin by subsampling the original spatial distribution, while attempting to preserve the same level of coverage. The figure below was produced by our subsampling routine.

![](https://i.imgur.com/yGyUZwW.png)

We are now ready to learn the dynamics of the system. For example, considering pressure measurements as the signal of interest, we can apply standard DMD to predict the evolution of the signal. The figure below compares predicted pressure values (red) against ground truth measurements (blue).

![](https://i.imgur.com/evM0Pcu.png)


Second, to help alleviate the second challenge with scaling up computations to the analysis of high-dimensional data, we extend tensor DMD (TDMD) with progressive sketching capabilities. We leverage our group's recent work on SketchyCoreSVD to speed up TDMD under reasonable sparsity assumptions on the data matrices. Our preliminary experiments on the NCEP North American Regional Reanalysis (NARR) dataset demonstrates more than a 2x speed-up as summarized in the figure below.

![](https://i.imgur.com/KDARSU3.png)

## Codes
* [DMD modeling dynamics](https://utexas.box.com/s/k0726blm3yfizmko33nxc4e4zr8edpc5)
* [GEMS: preprocessing and deep learning](https://utexas.box.com/s/c7gk4pasbba2lo3wnd0qmqien786mfaa)


## People
* PI: Prof. Chandrajit Bajaj
* Taemin Heo (PhD)
* Ahmed Abdelkader (Postdoc)
