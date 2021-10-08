---
title: "Camera ISP"
slug: "/projects/camera-isp"
date: "2020-09-01"
---

## Project Introduction

Heterogeneity exists in most camera images. This heterogeneity manifests itself across the image space as varied Moire ringing, motion-blur, color-bleaching or lens based projection distortions. Moreover, combinations of these image artifacts can be present in small or large pixel neighborhoods, within an acquired image. Current camera image processing pipelines, including deep trained versions, tend to rectify the issue applying a single filter that is homogeneously applied to the entire image. This is also particularly true when an encoder-decoder type deep architecture is trained for the task. In this paper, we present a structured deep learning model that solves the heterogeneous image artifact filtering problem. We call our deep trained model the Patch Subspace Variational Autoencoder (PS-VAE) for Camera ISP. PS-VAE does not necessarily assume uniform image distortion levels nor similar artifact types within the image. Rather, our model attempts to learn to cluster different patches extracted from images into artifact type and distortion levels, within multiple latent subspaces (e.g. Moire ringing artifacts are often a higher dimensional latent distortion than a Gaussian motion blur artifact). Each image’s patches are encoded into soft-clusters in their appropriate latent sub-space, using a prior mixture model. The decoders of the PS-VAE are also trained in an unsupervised manner for each of the image patches in each soft-cluster. Our experimental results demonstrates the flexibility and performance that one can achieve through improved heterogeneous filtering. We compare our results to a conventional one-encoder-one-decoder architecture.

![Introduction](./image0.png)

## PS-VAE

The overall pipeline of our PS-VAE. The entire training process is a two-fold step: we train the single encoder to achieve the best latent encoding with a latent vector maximally separating patches into subspaces and a dummy decoder. Then, we train multiple decoders with the encoder and the latent space to be fixed.

![Algorithm](./image1.png)

## RSE-RL

The overall pipeline of our RSE-RL: For each given observed image, we split the image into local patches and feed every patch as a stack into the encoding network. The latent space is divided into three subspaces, the encoder projects the YUV features of the patches onto three latent subspaces $Z_y$, $Z_u$, and $Z_v$. Both the clean patches and noisy patches are projected onto the three spaces. A set of transformations $T$ are learned to transform the latent representation of the noisy patches to a corresponding representation of the clean patches in all three subspaces. The transformed noisy representations are sent to the decoder for image reconstructions. After the denoised images are constructed, a PSNR is calculated and used to obtain the reward for a soft-actor-critic reinforcement learning model. The RL model uses the distance from the target PSNR and actual PSNR as the reward to adjust the trainable weights in the transformation $T$. Hence we have a self-enhancing image denoising network.

![Algorithm](./image_rse_rl.png)

## Results

### PS-VAE

![Results](./image2.png)

### RSE-RL

![RSE](./image_result_rse_rl.png)

## Project Members
Yunhao Yang, Yuhan Zheng, Yi Wang, Dr. Chandrajit Bajaj

## Code Repo

[Github link](https://github.com/CVC-Lab/RSE-RL)

## Paper(Preprint)

[PS-VAE](https://arxiv.org/abs/2104.00253)
