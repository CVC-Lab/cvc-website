---
title: "Flexible Fitting of Crystal Structures into Density Maps"
slug: "/seminars/spring2011/flexible-fitting"
date: "2011-06-02"
---

CVC Seminar: Wed June 1 10:00-11am ACES 4.402

Radhakrishna Bettadapura

Flexible Fitting of Crystal Structures into Density Maps

In flexible fitting, the crystal structure P of a protein is deformed to maximize a pre-determined correlation measure with a cryo-EM density map M of the same protein. All flexible fitting algorithms ask, and answer, three questions: 1) How can P be deformed? 2) How can P be correlated with M? and, 3) How can deformation and correlation be a) sped up and b) made more accurate? Whereas approaches to flexible fitting in the past have answered questions 1 and 2 fairly well, 3 has been essentially ignored; for instance, most flexible fitting approaches do not quantify either the complexity of their technique or the loss in accuracy due to its application on P. In addition, the question of correlating P with M has been answered in nearly identical ways: by blurring the PDB and computing its spatial correlation with the density map.

In this proposal, we present a new answer, based on motion assignment to domains, to question 1; a new answer, based on electrostatics representation and skeletonization of density maps, to question 2; and a new answer, based on rotational and translational FFT speedups, to question 3. We thus present a new flexible fitting algorithm; highlight the ways in which it is different from older, more tested approaches; and present preliminary results on many different types of data.
