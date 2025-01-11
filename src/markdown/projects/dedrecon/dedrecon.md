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

The goal of this project was to **develop (train, validate, and test)** advanced **machine learning** and **deep learning** technologies for **intelligent, real-time stream processing** of diverse **Electro-Optical (EO) / Infrared (IR)** video streams, commonly referred to as hyperspectral or EO/IR imagery, to enable **wide area persistent surveillance**. When paired with EO/IR video sensor systems, these analytic software technologies become essential components of the Army’s next-generation active protection systems.

By **developing** these technologies, we have:
1. Documented **spatio-temporal-spectral (STS)** details of EO/IR data,
2. Identified which STS phenomena are discernible or discriminable,
3. Detected and characterized STS anomalies (i.e., unexpected or unusual spatio-temporal-spectral patterns or changes).

## What is the problem?

We addressed the challenge of **detecting various types of object and motion anomalies** using different spatial and spectral resolution hyperspectral video systems under a wide range of lighting and weather conditions.

## Why is it hard?

Scenes under surveillance can rapidly change in appearance and content. Multiple and diverse objects may be moving at different distances from the sensors, and environmental conditions (time of day, weather, terrain, seasons) can vary drastically. Each scenario can demand unique, “intelligent” data analytics that adapt to different sensor systems.

## How is it done today, and what are the limits of current practice?

A standard approach to anomaly detection relies on **optical flow**—the movement of colors in a video—to detect motion. Pixels flagged by optical flow are passed through a conventional neural network to decide if they are anomalous. However, this approach:

- Is **computationally expensive** (optical flow can be costly to compute),
- Is **imprecise**, often marking too many pixels or missing smaller anomalies,
- Is **scenario-specific**, usually tested under restricted conditions (e.g., one time of day).

We overcame these limitations by developing **multiply learned deep neural network models** that perform robustly **day or night**, across **all seasons**, and under **any weather conditions**.

## What we’re doing

Our approach involved **training, validating, and testing** variational autoencoders—referred to as **Deep Encoder-Decoder Recurrent Networks (DEDRECON)**—to model “normal” through “extra-ordinary” motion and patterns in a variety of realistic environmental scenarios. Once trained, these DEDRECON models **detect and classify object-scene patterns** and identify motion anomalies in real time, labeling them as deviations from learned “normal” behavior and categorizing them into levels of “extra-ordinary,” i.e., potential threats.

Specifically, we processed two distinct EO/IR video streams:
1. A **hyperspectral** stream with **high spectral resolution**,
2. A **multispectral** stream with **high spatial resolution**.

We trained two separate variational autoencoders—one for each stream—and then combined them within a **common correlation space** via two **invertible recurrent neural networks**. This architecture:

- Maximizes **discernibility** of objects, scenes, motion, and environmental variations,
- Captures finer details in anomalies across multiple locations,
- Extends detection range when paired with appropriate lenses,
- Produces fewer “false alarms” by filtering out unnecessary anomalous pixels.

## On-the-Fly Compression and Sampling

**SketchyCoreSVD** is an on-the-fly sampling and compression method designed for matrices (e.g., 2D images). References [4,5] provide examples of this technique. In this project, we **extended** on-the-fly sampling and compression to **time-varying multimedia data**, treating them as **tensors** of order greater than three (note: tensors of order two are matrices, order one are vectors, and order zero are scalars). We have released **MATLAB** and **Python** implementations of these methods.

## Sensing Modalities

We worked with multiple sensing modalities, including:
- **Hyperspectral Imaging (HSI)**,
- **Electro-Optical (EO) / Infrared (IR)**,
- **Radio Frequency (RF)**,
- **Light Detection and Ranging (LiDAR)**.

Leveraging multiple modalities exploits the strengths of each while also posing challenges in **data fusion** and **on-the-fly compression**.

## PROGRESS

We successfully achieved **Super Resolution for Enhanced Identification of Target Regions of Interest (TROI)** by combining two low-resolution multispectral–hyperspectral video streams [1,2,3].

## Publications

1. C. Bajaj, Y. Wang, *Super-Resolution Tensor Recovery from Multi-Level Adaptive Sub-Sampling*, Manuscript 2020.  
2. C. Bajaj, Y. Wang, *Blind Hyperspectral-Multispectral Image Fusion via Graph Laplacian Regularization*, arXiv:1902.08224.  
3. L. Wu, X. Li, C. Bajaj, *Dynamic Filtering with Large Sampling Field for ConvNets*, *European Conference on Computer Vision (ECCV)* 2018, [https://doi.org/10.1007/978-3-030-01249-6_12](https://doi.org/10.1007/978-3-030-01249-6_12).  
4. S. Gupta, C. Bajaj, *A Streaming Model for Generalized Rayleigh with Extensions to Minimum Noise Fraction*, *Proceedings of IEEE Big Data Conference* 2019, [https://doi.org/10.1109/BigData47090.2019.9006512](https://doi.org/10.1109/BigData47090.2019.9006512).  
5. C. Bajaj, Y. Wang, T. Wang, *SketchyCoreSVD: SketchySVD from Random Subsampling of the Data Matrix*, *Proceedings of IEEE Big Data Conference* 2019, [https://doi.org/10.1109/BigData47090.2019.9006345](https://doi.org/10.1109/BigData47090.2019.9006345).

## Funding

This project is funded by **Army Futures Command (AFC)**.

## People

- **Principal Investigator (PI):** Prof. Chandrajit Bajaj  
- Ryan Farell (Project Lead)  
- Ahmed Abdelkader (Postdoc)  
- Luke McLennan (PhD)
- Chase Tessmer (PhD)  
- Yi Wang (PhD)  
- Nikhil Ajjarapy (Undergraduate Researcher)  
- Contrad Li (Undergraduate Researcher)  
- Benjamin Beal (Undergraduate Researcher)  
- Edward Zhou (Undergraduate Researcher)  
