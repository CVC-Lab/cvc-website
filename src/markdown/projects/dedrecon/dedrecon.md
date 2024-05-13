---
title: "Deep Encoder-Decoder Recurrent Networks"
slug: "/projects/dedrecon"
date: "2020-09-01"
---

### [Computational Visualization Center Wordpress Link](https://cvcweb.oden.utexas.edu/cvcwp/projects/dedrecon/)

## Project Components

- [Video Imputation](../video-imputation)
- [Sample Complexity](../sample-complexity)

## What are we trying to do?

The goal of this project is to develop ( train, validate and test ) advanced machine learning , deep learning technologies for intelligent, real time, stream processing of diverse hyperspectral (EO/IR) video streams, for wide area persistent surveillance. These analytic software technologies coupled to EO/IR video sensor systems, would be a key enabler to Army’s next generation active protection systems.

Develop ( train, validate and test ) advanced machine learning , deep learning technologies for intelligent, real time, stream processing of diverse hyperspectral (EO/IR) video streams, for wide area persistent surveillance. These analytic software technologies coupled to EO/IR video sensor systems, would be a key enabler to Army’s next generation active protection systems. 1. Document EO / IR spatio-temporal-spectral (s) details 2. What sts is discernible /discrimatable. 3. What are the sts anomalies….

## What is the problem?

Detection of various types of object and motion anomalies, using different spatial and spectral resolution hyperspectral video systems, and under diverse lighting and weather conditions.

## Why is it hard?

Scenes under surveillance change quickly. Multiple and diverse objects can be in motion, and at quite different distances, from the surveillance equipment. Going from day to night, stormy and calm situations, land and sea, and summer to winter will require different “intelligent” data analytics, customizable to different sensor systems.

## How is it done today, and what are the limits of current practice?

Today, anomaly detection uses optical flow, the movement of colors in a video, to detect movement. The pixels associated with this movement are run through a standard neural network to determine whether or not those pixels are anomalous. The problem with this approach is that optical flow is expensive to compute and is not very precise. It usually marks more pixels than necessary and often misses smaller anomalies completely. Also, these models tend to only be tested at a certain time of day. We plan to create a multiply learned deep neural network model that will work day and night and in any season, any weather conditions

## What we’re doing.

Our approach is to train, validate, test variational autoencoders (deep encoder-decoder recurrent networks: DEDRECON) to model various classes of “normal” to “extra-ordinary” patterns and motion in a variety of realistic location and environmental scenarios. The trained DEDRECON models shall detect and classify object-scene patterns and motion behavioral anomalies, in real time. The detected anomalies that deviate from learned “normal” behavior will be categorized into various levels of “extra-ordinary” aka “potential threats”.

Our approach takes two EO/IR video streams, one highly resolved in the spectral dimension (hyperspectral) and one higher resolved in the spatial dimension (multispectral). Two variational autoencoders will be trained, each on one of the hyperspectral, multispectral video data, and multiply combined in a common correlation space, using two additional invertible recurrent neural networks to achieve maximum discernibility of object, scene, motion, lighting, environment variations. This approach resolves finer details in anomalies, simultaneously at multiple locations, and with appropriate lens systems, at further distances away. Additionally, fewer unnecessary pixels are marked as anomalous thanks to the higher resolution spatial and spectral data we are combining. Scenarios needing these enhancements will immediately benefit.

## On-the-Fly Compression and Sampling

The SketchyCoreSVD is a on -the-fly sampling and compression method applied to images represented as matrices. The papers [4,5] show examples of this approach. The new work we are doing is to extend the on-the-fly sampling and compression to time-varying multimedia data , treating them as Tensors of order greater than three. Note that tensors of order two are matrices, one are vectors, and zero are scalars. The code is available in MATLAB and Python.

## Sensing Modalities

We are actively working with HSI (Hyperspectral Imaging), EO/IR (Electro-Optical/Infra-Red), RF (Radio Frequency), and LiDAR (Light Detection and Ranging). Operating with multiple modalities presents opportunities to capitalize on the best that each modality can elucidate. However, it also presents challenges such as data fusion and on-the-fly compression.

## PROGRESS

Super Resolution for Enhanced Identification of Target Regions of Interest (TROI) by combining two low resolution multispectral-hyperspectral video streams [1,2,3].

## Publications

1. Bajaj, Wang, Super-Resolution Tensor Recovery from Multi-Level Adaptive Sub-Sampling, Manuscript 2020.
2. Bajaj, Wang, Blind Hyperspectral-Multispectral Image Fusion via Graph Laplacian Regularization, Arxiv:1902.08224
3. Wu, Li, Bajaj, Dynamic Filtering with Large Sampling Field for ConvNets, ECCV 2018.https://doi//.org/10.1007/978-3-030-01249-612
4. S. Gupta, C. Bajaj, A Streaming model for Generalized Rayleigh with extensions to Minimum Noise Fraction, Proc. Of IEEE Big Data Conferencee 2019, DOI: 10.1109/BigData47090.2019.9006512 (pdf)
5. C. Bajaj, Y. Wang, T. Wang, SketchyCoreSVD: SketchySVD from Random Subsampling of the Data Matrix, Proc. Of IEEE Big Data Conferencee 2019, DOI: 10.1109/BigData47090.2019.9006345 (pdf)

## Funding

This project is being funded by Army Futures Command (AFC).

## People

PI: Prof. Chandrajit Bajaj
Ahmed Abdelkader (Postdoc)
Ryan Farell (PhD)
Chase Tessmer (PhD)
Yi Wang (PhD)
Nikhil Ajjarapy (Undergraduate Researcher)
Contrad Li (Undergraduate Researcher)
Benjamin Beal (Undergraduate Researcher)
Edward Zhou (Undergraduate Researcher)
