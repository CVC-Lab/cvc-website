---
title: "Theoretical bound for optimal control flow (OCF) algorithm"
slug: "/projects/theoretical-bound"
date: "2023-08-07"
---

## Project Description

This work aims to provide a more solid theoretical and mathematical understanding of optimal control flow (OCF) algorithm.

OCF algorithm is an "time-expansion (Dijkstra-like)" algorithm that can be used to solve black-box optimization (BBO) problem from a reinforcement learning viewpoint. In particular, we solve the BBO problem in the following reinforcement learning formulation:

$$
\begin{align*}
\text{Find } u^* &= \arg\min \int_0^T \left(e^{-t} \frac{u^2}{2} - e^t\mathcal{F}(q)\right) dt \nonumber \\
& \text{subject to }\dot{q} = u
\end{align*}
$$

Here $\mathcal{F}$ is the black-box function that need to be optimized on.

### Algorithm in a nut-shell

The optimal control flow (OCF) algorithm tries to solve the above integral formulation by focusing on its differential form instead.

**Input:** a black box $\mathcal{B}$ that outputs values of objective function $\mathcal{F}$ and an oracle $\mathcal{O}$ to generate starting points in $X$.
**Output:** a neural network approximation $h^{\theta}$ of the reduced Hamiltonian function $h^{\mathcal{F}}$ that captures the machine's learning process to arrive at the minimum point.

1. Initialize a replay memory $\mathcal{M}$. Add to $\mathcal{M}$ starting sample points from $\mathcal{O}$. Perform a warm up step and optimize $h^{\theta}$ with data batches taken from $\mathcal{M}$.
2. Initialize $k = 0$ as the current step and repeat the following while incrementing $k$ until $k$ reach the maximum number of steps:
   1. Sample points from $\mathcal{O}$. Note that we always set the staring adjoint variable to $0$.
   2. Use a generic ordinary differential equation (ODE) solver to perform forward Hamiltonian dynamics with $h^{\theta}$ to collect samples. The generated sample trajectories consists of only samples that are at most $k$ steps away from the starting points.
   3. Add samples to $\mathcal{M}$ and optimize $h^{\theta}$ using the data batches from $\mathcal{M}$.

## Main Motivation

The algorithm OCF aims to find the optimal path that approximate the learning path to the minimizers of the (black-box) function $\mathcal{F}$. The previous work already focus on the algorithmic point of view. In this work, we aim to provide the rigorous proofs for OCF's convergence and OCF's other properties such as its stability.

## General ideas

Suppose the optimal path is $(x(t))_t$, and the approximate path is $(y(t))_t$. Essentially, the algorithm is surrounded by the following two ODEs:

$$
\begin{align*}
\dot{x}(t) &= h(x(t)) \\
\dot{y}(t) &= h^{\theta}(y(t))
\end{align*}
$$

And we want to our algorithm to train the neural net $h^{\theta}$ that approximate $h$ so that the prediction $y(t)$ is as close as possible to the truth value $x(t)$.

From the equation, we can have the following simple bound:

$$
\begin{align*}
\dot{(x-y)}(t) &\leq ||h(x(t))-h(y(t))|| + ||h(y(t))-h^{\theta}(y(t))|| \\
&\leq L(x-y)(t) + ||h(y(t))-h^{\theta}(y(t))||
\end{align*}
$$

Here $L$ is Lipschitz constant of the real (reduced) Hamiltonian.

In the ideal situation, when the neural net $h^{\theta}$ does a perfect job of approximating $h$, the bound becomes:
$$\dot{(x-y)}(t) \leq L(x-y)(t)$$

With this bound, suppose our OCF is moving from the time $t$ (step $k$) to the time $t+dt$ (in step $k+1$). Then Gronwall's inequality gives us:
$$(x-y)(s) \leq (x-y)(t) e^{Ldt} for s \in [t, t+dt]$$

Suppose our previous approximation does well with reinforce examples from previous step so that $(x-y)(t) \leq \alpha\epsilon$ ($\alpha < 1$ but can be close to 1). Then, on the next time interval, with small enough dt, $(x-y)(s)$ will be bounded by $(\alpha\epsilon) * 1/\alpha= \epsilon$. During each iteration, we can then add more samples from the previous step to reinforce the bound $(x-y)(t)$. They together with the new sample will be used to optimize the mismatch between $h$ and $h^{\theta}$.

This general idea is inspired by Banach fixed-point theorem and can be considered as its extension. Of course, such ideal situation never exists, leading to the main research problem.

## Main challenges

The second term error $||h(y(t))-h^{\theta}(y(t))||$ can both come from the empirical examples and the hypothesis space $W$ (class of functions from our neural net architecture). We focus on the former first as it is already difficult to handle and very different from traditional setting.

In the usual setting, we want to learn a hypothesis $w$ (find neural net parameters to approximate $h$ in our case) in hypothesis space $W$ from a dataset $S_n = (z_1; z_2; \cdots ; z_n)$ with $n$ samples where each instance $z_i = (x_i, y_i) = (feature, label)$ is i.i.d. drawn from some distribution $\mu$.

We may define a loss function $l: W \times Z \to \mathbb{R}$ associated to the learning algorithm, which tries to minimize the empirical loss $\frac{1}{n} \sum_{i = 1}^n l(w, z_i)$ on $W$. With this setup, one try to bound the expected generalization error $\mathbb{E}_{W, S_n}[\mathcal{E} (w, S_n)]$, where the (pointwise) generalization error is $\mathcal{E} (w, S_n) = \mathbb{E}_{Z \sim \mu}[l(w, Z)] - \frac{1}{n} \sum_{i = 1}^n l(w, z_i)$.

Many bounds such as the one below are derived in the form of mutual information:
$$\mathbb{E}_{W, S_n}[\mathcal{E} (w, S_n)] \leq \frac{1}{n} \sum_{i=1}^n \sqrt{2\sigma^2 I(W, Z_i)}$$
In several cases, $I(W, Z_i)$ is shown to have $O(1/n)$ bound, leading to $O(\sqrt{1/n})$ bound overall. With $n$ reasonably large, one would hope the second approximation can be dealth with. This is a common strategy used in the literature.

Nonetheless, in our case, at time $k$, the hypothesis space $W^k$ is iteratively adapted to the data $S_n^k$, and at time $k+1$, new data set $S_n^{k+1}$ is extracted using $W^k$. This dependence makes our problem more challenging and, of course, the i.i.d assumption and even other reasonable assumption (Markov chain-related) are no longer valid.

## A simple solution in 1D case.

In 1D case, we can have a "simple" strategy to handle the second term. More specifically, let $h^p$ be the Lagrange interpolation of $h$. It is possible to find a neural net $h^{\theta}$ so that the bound between $h^{\theta}$ and $h^p$ can be explicitly defined and small enough to be negligible (note that this is a non-trivial step). Then we obtain:

$$
\begin{align*}
||h(y(t)) - h^{\theta}(y(t))|| &\approx ||h(y(t)) - h^p(y(t))||\\
&\leq C \prod_{\text{sample s on sample path}}(y(t)-s) \leq C (k\epsilon)^n \leq \epsilon
\end{align*}
$$

for large enough number of samples $n$ and some constants $C$, $k$. We can then proceed as in the previous section.

## Paper links

To be added

## People

- Minh Nguyen (PhD)
- Prof. Chandrajit Bajaj
- Taemin Heo (Postdoc)
