---
title: "Robust Physics-informed Neural Networks (PINNs)"
slug: "/projects/robust-pinns"
date: "2021-10-26"
---

# Project Introduction

Physics-informed Neural Networks (PINNs) have been shown to be effective in solving partial differential equations by capturing the physics induced constraints as a part of the training loss function. This paper shows that a PINN can be sensitive to errors in training data and overfit itself in dynamically propagating these errors over the domain of the solution of the PDE. It also shows how physical regularizations based on continuity criteria and conservation laws fail to address this issue and rather introduces problems of their own causing the deep network to converge to a physics-obeying local minimum instead of the global minimum. We introduce Gaussian Process (GP) based smoothing that recovers the performance of a PINN and promises a robust architecture against noise/errors in measurements. Additionally, we illustrate an inexpensive method of quantifying the evolution of uncertainty based on the variance estimation of GPs on boundary data. Robust PINN performance is also shown to be achievable by choice of sparse sets of inducing points based on sparsely induced GPs. We demonstrate the performance of our proposed methods and compare the results existing benchmark models in literature for time-dependent Schrodinger's and Burger's equations.

## Schrodinger Equation Experiments

### Standard PINN with uncorrupted initial data
![sPINN Initial](../../../images/projects/robust_pinns/NLS_h_no_error.png)
### Standard PINN with corrupted initial data
![sPINN](../../../images/projects/robust_pinns/NLS_h_no_smoothing.png)
### 2-domain Conservative PINN
![cPINN](../../../images/projects/robust_pinns/cPINN_NLS_h.png)
### PINN with conservation law
![PINN NLS](../../../images/projects/robust_pinns/PINN_with_Conservation_NLS_h.png)
### PINN with Gaussian Process smoothing
![NLS GP](../../../images/projects/robust_pinns/NLS_h_GP_with_bounds.png)
### PINN with sparse Gaussian Process smoothing
![NLS SGP](../../../images/projects/robust_pinns/NLS_h_SGP30_with_bounds.png)


## Burgers Equation Experiments

### Standard PINN with corrupted initial data
![Standard PINN](../../../images/projects/robust_pinns/Standard_PINN_Burgers.png)
### PINN with sparse Gaussian Process smoothing
![SGP](../../../images/projects/robust_pinns/SGP_PINN_Burgers.png)

## Code Repo
[GitHub Link](https://github.com/CVC-Lab/RobustPINNs)

## People
Chandrajit Bajaj, Luke McLennan, Timothy Andeen, Avik Roy.

## Acknowledgement
The research for C.B. was supported in part by NIH-R01GM117594, by the Peter O'Donnell Foundation, and in part from a grant from the Army Research Office accomplished under Cooperative Agreement Number W911NF-19-2-0333. The work of L.M. was supported by the the Moncreif Summer Undergraduate Internship Program. The work of T.A. and A.R. is supported by U.S. Department of Energy, Office of High Energy Physics under Grant No. DE-SC0007890 .
