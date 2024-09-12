---
title: Optimally Controlled Protein Side-Chain and Folding using Stochastic Pontryagin  
slug: /projects/protein-sidechain
date: 2024-09-12
---

# Optimally Controlled Protein Side-Chain and Folding using Stochastic Pontryagin 

Chandrajit Bajaj, Minh Nguyen, and Conrad Li<br>University of Texas at Austin


#### Abstract

Protein structure prediction is a fundamental problem in computational molecular biology. Both classical algorithms such as abinitio or threading and machine learning methods have been proposed to solve this challenging problem. However, most reinforcement learning methods previously considered tend to model the state-action pairs as discrete objects. In this paper, we develop a novel reinforcement learning (RL) framework in a continuous setting and based on a stochastic parametrized Hamiltonian version of the Pontryagin maximum principle (PMP) to solve the side-chain packing and protein-folding problem. Our resulting solution follows Langevin dynamics and stochastic Hamiltonian dynamics folding pathways under various different models of molecular energetics and force fields, reflecting the expected physical properties of an optimal path.


Keywords: Molecular modeling $\cdot$ Reinforcement learning $\cdot$ Side chain packing.

## 1 Introduction

A protein consists of poly-peptide chains, where each chain is an embedded sequences of amino acids with specific 3D structure. By chemical reactions, amino acids become linked to form these poly-peptide chain. A residue is a transformed amino acid as it forms the poly-peptide chain. Each residue consists of $N-H, C_{\alpha}, C=O$, which are part of the backbone of the protein, and a side chain $R$. The side chain $R$ is different for different amino acids and quite often thought to be attached to the $C_{\alpha}$ with different rotamer orientations.. The primary structure of protein is the 1-D sequence of residues. However, to be functional, protein fold into a certain metastable 3D configurations that minimizes their potential energy which is a combination of hydrogen bonding, electrostatics and the solvation terms capturing their interactions with the ionic watery environment at various PH levels. These metastable 3D configurations of the protein give the tertiary and quaternary structure of the protein.

Atoms in a single residue are conceptualized to be linked by various bond edges (single, double covalent and even ionic). The bond angle between these bond edges, the length of these edges, and the torsion angles called dihedral angles. These angles are around each of the four consecutive atoms along the backbone
chains that specify the protein structure. Side-chain conformations (SCP) problem aims to determine the rotamer angle of the side chain residues in the protein structure. SCP is, in fact, a critical subproblem of protein prediction. The SCP problem is non-convex and equally NP-hard as is the full structure prediction problem [135]. It cannot even be approximated in polynomial time, i.e. no PTAS (polynomial time approximation scheme) is possible 6. Many SCP algorithms with various techniques ranging from combinatorial algorithm to deep learning solutions have been developed and implemented in the past three decades.

Classical methods: Suppose we're given a fixed (low-energy) structure embedding of the protein sequence that forms a protein backbone chain in 3D, and a discretized rotamer library of feasible side chain orientations. SCP can be formulated as a combinatorial search problem for the optimal sequence of rotamer orientation selections along the backbone that optimizes the total energy function of the side chain packed backbone chain. Many of the classical methods [6|10|9|11|12|28|29|30|36|41|44|45] rely on this combinatorial formulation and also the discretized rotamer libraries, obtained from a statistical clustering of observed side-chain conformations in known protein crystal structures. The overall protein potential energy function or Hamiltonian typically includes a term for the backbone conformation, one for each side chain rotamer assignment in the protein, and one term for every pair of chosen rotamer orientations.

More complex energy terms such potential energy functions combined with complex solvation free energy terms [25|31|43] are sometimes used. The Dead End Elimination (DEE) theorem [7] is often used to prune the number of rotamers to be considered for finding a global energy minima. Many algorithms based on this theorem can find the global minima provided they are able to converge [7|8|13|14|20|22|23|27|29|34|42]. ON the other hand, alternative techniques, such as Markov Chain Monte-Carlo simulation [16, cyclical search [1143, spatial restraint satisfaction 67], semi-definite programming 6|21|45, yield reasonable running times but unfortunately don't guarantee a global optima.

Deep learning framework: Earlier works utilizing deep learning [26|32] rely heavily on rotamer libraries to handle side-chain prediction. SIDEPro, for example, uses a family of ANNs to learn energy function. The ANNs' weights are optimized based on the posterior probability of the rotamers, which is calculated by the given prior probability in the rotamer libraries. Recently, many end-toend deep learning models that rely on sequence homology rather than rotamer libraries have been proposed for protein structure prediction problem. AlQuraishi [3] uses a RNN to encode a protein sequence and then supervised learning with ProteinNet dataset [4] to predict the 3D protein structure. AlphaFold 38] uses deep two-dimensional dilated convolutional residual network and trains on Protein Data Bank (PDB) to predict distances between $C_{\beta}$ atoms, and use this information to infer the 3D structure. AlphaFold2 [19] further augments AlphaFold1 with an attention-based network to predict backbone dihedrals and
sidechain torsion angles which are used to reconstruct the atomic coordinates. Ingraham et al. 17] instead uses a deep network model to learn a stochastic energy function. This work develops a simulator based on unrolled Langenvin dynamics together with an atomic imputation network to predict the final structure given sequence information.

Molecular reinforcement learning framework: There are not many works that use reinforcement learning for both side-chain prediction and protein folding. Most of these works rely on some discrete models with either discrete action or discrete state. For instance, Jafari et al. 18 considered the lattice-based model called the hydrophobic-polar (HP) model [24]. The state receives only two values: 1 (hydrophilic) or -1 (hydrophobic). Meanwhile, an action can only be either up, down, left or right.

Our main contributions in this work are:

- A reinforcement learning framework in a continuous setting and based on a new stochastic parameterized Hamiltonian version of the Pontryagin maximum principle (PMP) for the protein side-chain and folding problems.
- Optimal parameters for stochastic Hamiltonian dynamics, through the velocity adjoint variables, to capture the full Langevin dynamics of prior methods.
- Our approach allows for the use of different models of protein energetics and force-fields and provides flexible optimal trajectory assignment solutions to the rotamer angles for side-chain packing.

The rest of the paper is organized as follows: Section 2 describes side-chain packing and protein folding formulations together soft-actor critic RL algorithm. Section 3 states the stochastic version of Pontryagin maximum principle and its application to continuous-time RL formulation for side-chain packing and protein-folding problem. We also shows how our modeling recovers the continuous Nesterov's accelerated gradient descent dynamics. In Section 4 we apply our RL modeling and use soft actor-critic algorithm to handle dialanine and trialanine side-chain and folding tasks.

## 2 Problem statement and reinforcement learning approaches

### 2.1 Problem statement

The primary learning problem is to predict the final folded structure from the primary structure (and possibly using protein atomistic data from databases such as PDB ). By stacking all 3D coordinate $x_{i}$ of $i$ th atom in the protein for $i \in \overline{1, N}$, we obtain the state coordinate $x$. Denote the rotamer angles of the $i^{t h}$ side-chain by $d_{i}^{r}$ and the dihedral angles along the protein backbone $N-C_{\alpha}, C_{\alpha}-C^{\prime}$ and $C^{\prime}-N$, as $d_{i}^{b}$. These dihedral angles are often denoted by $\left(\phi_{j}, \psi_{j}, \omega_{j}\right)$. We assume that the bond lengths and the bond angles are rigid so that only the $d_{i}^{r}$ and $d_{i}^{b}$
angles collectively determine the final geometric shape of the folded protein. For side-chain packing, the $d_{i}^{b}$ angles are fixed and only the $d_{i}^{r}$ angles are movable. As in [17, we define the protein internal coordinates as $z_{i}$. Assume that the bond angle and bond length are $a_{i}$ and $b_{i}$ respectively. We denote $d_{i}$ as the vector that captures all movable configuration angles, namely $d_{i}=d_{i}^{r}$ for the side chain packing problem, and $d_{i}=d_{i}^{b} \cup d_{i}^{r}$. This yields the equation:

$$
x_{i}=x_{i-1}+b_{i}\left[u_{i-1} n_{i-1} \times u_{i-1} n_{i-1}\right]\left[\begin{array}{c}
\cos \left(\pi-a_{i}\right)  \tag{1}\\
\sin \left(\pi-a_{i}\right) \cos \left(d_{i}\right) \\
\sin \left(\pi-a_{i}\right) \sin d_{i}
\end{array}\right]
$$

The side chain packing (and folding) problem is (are) to find the optimal set of side-chain rotamer angles (and additionally the backbone dihedral angles) corresponding to the optimal configuration $c=\left(c_{i}\right)_{i=1}^{N}$ that minimizes the potential energy:

$$
\begin{equation*}
c^{*}=\underset{c}{\arg \min } U(c) \tag{2}
\end{equation*}
$$

The potential energy include bonded energy caused by interactions between atoms that are chemically bonded to one another, and non-bonded energy for atoms not chemically bonded:

$$
\begin{align*}
U & =U_{\text {total }}=U_{\text {bonded }}+U_{\text {non-bonded }} \\
& =\left(\sum_{\text {bonds }} K_{r}\left(r-r_{0}\right)^{2}+\sum_{\text {angles }} K_{\theta}\left(\theta-\theta_{0}\right)+\sum_{\text {rotamers }} f(\text { rotamer })\right)  \tag{3}\\
& +\sum_{\text {dihedrals }} f(\text { dihedral })+\left(\sum_{i<j} \frac{q_{i} q_{j}}{\epsilon r_{i j}}+\sum_{i<j}\left(\frac{A_{i j}}{r_{i j}^{12}}-\frac{B_{i j}}{r_{i j}^{6}}\right)\right) \tag{4}
\end{align*}
$$

Here the first three sums belong to bounded energy while the fourth term is due to charged (electrostatic) interactions and modeled by Coulomb's law and the fifth term is due to van der Waals interactions and modeled by Lennard-Jones potential. Instead of only finding the optimal $c^{*}$, we wish to find the optimal trajectory from any initial configuration $c^{0}$ to the final optimal configuration $c^{*}$.

### 2.2 Soft actor-critic

The reinforcement learning objective is the expected sum of rewards. The goal is to learn the optimal stochastic policy $\pi\left(a_{t} \mid s_{t}\right)$ that maximizes the objective. For soft-actor critic, the objective is augmented with an entropy term $\mathcal{H}$ :

$$
\begin{equation*}
\pi^{*}=\underset{\pi}{\arg \max } \sum_{t} \mathbb{E}_{\left(s_{t}, a_{t}\right) \sim \rho_{\pi}}\left[r\left(s_{t}, a_{t}\right)+\alpha \mathcal{H}\left(\pi\left(. \mid s_{t}\right)\right)\right] \tag{5}
\end{equation*}
$$

The soft Q-function parameters can be trained by minimizing the soft Bellman residual:

$$
\begin{equation*}
J_{Q}(\phi)=\mathbb{E}_{\left(s_{t}, a_{t}\right) \sim \mathcal{D}}\left[\frac{1}{2}\left(Q_{\phi}\left(s_{t}, a_{t}\right)-\left(r\left(s_{t}, a_{t}\right)+\mathbb{E}_{s_{t+1} \sim \rho}\left[V_{\bar{\phi}}\left(s_{t+1}\right)\right]\right)\right)^{2}\right] \tag{6}
\end{equation*}
$$

This can be optimized with stochastic gradient:

$$
\begin{align*}
\hat{\nabla}_{\phi} J_{Q}(\phi)=\nabla_{\phi} Q_{\phi}\left(a_{t}, s_{t}\right) & \left(Q_{\phi}\left(s_{t}, a_{t}\right)-\left(r\left(s_{t}, a_{t}\right)\right.\right. \\
& \left.+\left(Q_{\bar{\theta}}\left(s_{t+1}, a_{t+1}\right)-\alpha \log \left(\pi_{\theta}\left(a_{t+1} \mid s_{t+1}\right)\right)\right)\right) \tag{7}
\end{align*}
$$

We reparameterize the policy by a neural network $a_{t}=f_{\theta}\left(\epsilon_{t} ; s_{t}\right)$, where $\epsilon_{t}$ is input noise vector, sampled from a fixed distribution. We also optimize the policy's parameters by minimizing:

$$
\begin{equation*}
J_{\pi}(\theta)=\mathbb{E}_{s_{t} \sim \mathcal{D}, \epsilon_{t} \sim \mathcal{N}}\left[\alpha \log \pi_{\theta}\left(f_{\theta}\left(\epsilon_{t} ; s_{t}\right) \mid s_{t}\right)-Q_{\phi}\left(s_{t}, f_{\theta}\left(\epsilon_{t} ; s_{t}\right)\right)\right] \tag{8}
\end{equation*}
$$

Finally, we approximate the gradient $\hat{\nabla}_{\theta} J_{\pi}(\theta)$ of $J_{\pi}$ by:
$\nabla_{\theta} \alpha \log \left(\pi_{\theta}\left(a_{t} \mid s_{t}\right)\right)+\left(\nabla_{a_{t}} \alpha \log \left(\pi_{\theta}\left(a_{t} \mid s_{t}\right)\right)-\nabla_{a_{t}} Q_{\phi}\left(s_{t}, a_{t}\right)\right) \nabla_{\theta} f_{\theta}\left(\epsilon_{t}, s_{t}\right)$

## 3 Stochastic Pontryagin maximum principle and Langevin dynamics

The soft actor-critic method is formulated in discrete-time setting. However, we now need to develop a continuous version of reinforcement learning with an appropriate choices of reward function to yield a reasonable solution for the side-chain and folding task. From here, we translate back our setup to soft-actor critic algorithm to get final algorithm (see Algorithm 1) for side-chain packing task.

### 3.1 Deterministic setting

Lemma 1. Assume that we're given the optimal control problem of finding optimal control $u$ that minimizes:

$$
\begin{equation*}
V(s, t)=\min _{a} \int_{0}^{T} l\left(s_{t}, a_{t}\right) d s \tag{10}
\end{equation*}
$$

subject to $d s_{t}=a_{t} d t, s(0)=s$. For the choice of $l(s, a)=e^{\gamma t}\left(U(s)-a^{2} / 2\right)$, the optimal trajectory $s_{t}$ has the form:

$$
\begin{align*}
& d s_{t}=a_{t} d t  \tag{11}\\
& d a_{t}=-\gamma a_{t} d t-\nabla U\left(s_{t}\right) d t \tag{12}
\end{align*}
$$

Proof. Consider the Hamiltonian $H(s, a, p, t)=p_{t}^{T} f\left(s_{t}, a_{t}\right)+l\left(s_{t}, a_{t}\right)$. By Pontryagin's maximum principle [?], we obtain the Hamiltonian dynamical system:

$$
\begin{align*}
& d s=H_{p}(s(t), a(t), p(t), t) d t  \tag{13}\\
& d p=-H_{s}(s(t), a(t), p(t), t) d t \tag{14}
\end{align*}
$$

Moreover, $H_{a}(s(t), v, p(t), t)$ is minimized at $v=a(t)$ so that $H_{a}(s(t), a(t), p(t), t)=$ 0 . Then for the dynamic function $f(s, a)=a$, and for the Lagrangian $l(x, u)=$ $e^{\gamma t}\left(U(s)-a^{2} / 2\right)$, we get $p(t)+l_{a}\left(s_{t}, a_{t}\right)=0$. Therefore, $p(t)=-l_{a}\left(s_{t}, a_{t}\right)=e^{\gamma t} a_{t}$. Plugging back into the dynamics of $p$, we get:

$$
\begin{equation*}
e^{\gamma t}(d a+\gamma a d t)=-l_{s}\left(s_{t}, a_{t}\right) d t=-e^{\gamma t} \nabla U\left(s_{t}\right) d t \tag{15}
\end{equation*}
$$

The cumulative loss $\sum_{t=0}^{T} l\left(s_{t}, a_{t}\right)$ can be consider as the discretization of the integral $\int_{0}^{T} l\left(s_{t}, a_{t}\right) d t$. The reward can simply be chosen as: $r\left(s_{t}, a_{t}\right)=-l\left(s_{t}, a_{t}\right)$.

### 3.2 Stochastic setting

Suppose the stochastic control problem is to minimize the cost functional

$$
\begin{equation*}
J(a(.))=\mathbb{E}\left[\int_{0}^{T} l\left(s_{t}, a_{t}\right) d t\right]+\mathbb{E}[h(T)] \tag{16}
\end{equation*}
$$

subject to

$$
\begin{align*}
d s_{t} & =g\left(s_{t}, a_{t}\right) d t+\sigma\left(s_{t}, a_{t}\right) d W_{t}  \tag{17}\\
s(0) & =s_{0} \tag{18}
\end{align*}
$$

where $s_{t}$ is the state variable at time $t$ with values in $\mathbb{R}^{n}, a($.$) is the control$ variable with values in a subset of $\mathbb{R}^{n}$, and $W_{t}$ is the Brownian motion in $\mathbb{R}^{n}$. Note that this stochastic control problem is the continuous version of the usual reinforcement learning problem formulation.

Theorem 1. (See [33]) Let the first-order adjoint process $(p(),. K()$.$) be the$ unique process that satisfies the stochastic differential equation:

$$
\begin{align*}
-d p_{t} & =\left(g_{s}\left(s_{t}, a_{t}\right)^{T} p_{t}+\sum_{j=1}^{d}\left(\sigma_{s}^{j}\left(s_{t}, a_{t}\right)\right)^{T} K_{j}(t)+l_{s}\left(s_{t}, a_{t}\right)\right) d t-K_{t} d W_{t}  \tag{19}\\
p_{t} & =h_{s}(s(T)) \tag{20}
\end{align*}
$$

We also consider the Hamiltonian:

$$
\begin{equation*}
H(s, a, p, K)=l(s, a)+(p, g(s, a))+\sum_{j=1}^{d}\left(K_{j}, \sigma^{j}(s, a)\right) \tag{21}
\end{equation*}
$$

Given that all function $g$ and $\sigma$ are continuously differentiable with respect to a, and the control domain is convex, then for the optimal solution $\left(s^{*}(),. a^{*}().\right)$ of the control problem 16, we have:

$$
\begin{equation*}
\left(H_{a}\left(s^{*}(t), a^{*}(t), p^{*}(t), K^{*}(t)\right), a-a^{*}(t)\right) \geq 0 \forall s \in U \tag{22}
\end{equation*}
$$

almost everywhere.

Corollary 1. By applying theorem 1 to the special case $\sigma \equiv 0, g(s, a)=a$, and the running loss $l(s, a)=\Gamma(t)\left(U(s)-a^{2} / 2\right)$, and the reward $r(s, a)=-l(s, a)$ for the potential energy $U$, we obtain the following optimal trajectory $x$ :

$$
\begin{align*}
d s_{t} & =a_{t} d t  \tag{23}\\
d a_{t} & =-\frac{\Gamma^{\prime}(t)}{\Gamma(t)} a_{t} d t-\nabla U\left(s_{t}\right) d t-K d W_{t} \tag{24}
\end{align*}
$$

for some constant $K$. In particular, for $\Gamma(t)=e^{\gamma t}$ for some constant $\gamma$, we obtain the optimal dynamics:

$$
\begin{align*}
& d s_{t}=a_{t} d t  \tag{25}\\
& d a_{t}=-\gamma a_{t} d t-\nabla U\left(s_{t}\right) d t-K d W_{t} \tag{26}
\end{align*}
$$

Proof. By a similar proof to that of we obtain the optimal trajectory $s_{t}$ with the following dynamics:

$$
\begin{align*}
& d s_{t}=a_{t} d t  \tag{27}\\
& d a_{t}=-\gamma a_{t} d t-\nabla U\left(s_{t}\right) d t-e^{-\gamma t} K_{t} d W_{t} \tag{28}
\end{align*}
$$

Because of the uniqueness of the solution to the adjoint stochastic differential equations 1. $e^{-\gamma t} K_{t}$ will be unique and must be the same as the constant in the Langevin dynamics because of the existence of the solution to the Langevin dynamics. Thus, this gives $e^{-\gamma t} K_{t}=K$ as desired.

Remark 1. This optimal trajectory follows the Langevin dynamics [17, a stochastic version of the dynamics considered in the previous section. This result motivates us to choose the reward function $r(s, a)=-l(s, a)=e^{\gamma t}\left(a^{2} / 2-U(s)\right)$ with backward discounted rate for the side chain prediction problem. Note that the constant $K$ here is defined as the diffusion part of the process $-p_{t}$ :

$$
\begin{align*}
-d p_{t} & =l_{s}\left(s_{t}, a_{t}\right) d t-K_{t} d W_{t}  \tag{29}\\
p_{t} & =h_{s}(y(T)) \tag{30}
\end{align*}
$$

### 3.3 Connection to Nesterov's accelerated gradient method

[39] shows that the continuous version of Nesterov's accelerated gradient method for minimizing a function $U$ is the following ODE:

$$
\begin{equation*}
\ddot{s}+\frac{3}{t} \dot{s}+\nabla U(s)=0 \tag{31}
\end{equation*}
$$

For the choice of $\Gamma(t)=t^{3}, \Gamma^{\prime}(t) / \Gamma(t)$ is exactly $3 / t$. Hence, by corollary 1 , for the Lagrangian (or regret) function $r(s, a)=t^{3}\left(a^{2} / 2-U(s)\right.$ ), we can recover the continuous Nesterov's accelerated gradient descent dynamics with Brownian motion noise added. Thus, we can improve the algorithm 1 by setting $r\left(s_{t}, a_{t}\right)$ to $(t / T)^{3}\left[\left(\sum_{j=1}^{M} \dot{d}_{j}^{2}\right) / 2-E_{t}\right]$. The Brownian motion term in equation 26 can be
adjusted to better balance exploration and exploitation. To make this adjustment, we derived another formula based on our more general framework with stochastic Pontryagin maximum principle:

$$
\begin{align*}
& d s_{t}=a_{t} d t+\exp \left(-U\left(s_{t}\right)\right) d W_{t}  \tag{32}\\
& d a_{t}=-\gamma a_{t} d t-\nabla U\left(s_{t}\right) d t \tag{33}
\end{align*}
$$

We still choose the same Lagrangian (or regret) function $l(s, a)=e^{\gamma t}(U(s)-$ $\left.a^{2} / 2\right)$. For this formulation, the function $K$ in the Hamiltonian in equation 21 will become 0 . The function $u$ is now deterministic rather than a stochastic process as before. The proof is the same as that of the corollary 1. With this formulation, when the energy is large, the molecular agent dynamical process focuses more on exploitation and helps reduce the variance of the trajectory.

Remark 2. We combine our theory with soft actor-critic algorithm to derive Algorithm 1 for side-chain packing problem.

## 4 Experiments

### 4.1 State and Action Space Representation

The state $s_{t}$ in the protein folding problem is a vector consisting of all torsion angles $\left(d_{i}\right)_{i=1}^{M}$. For the side chain problems, this only includes the set of all side chain angles. Each action $a_{t}$ is represented as a torsion angle perturbation vector $\dot{d}$ of length $M$, where $M$ is the number of torsion angles that the agent can change. At each time step, the agent performs the action by multiplying $\dot{d}$ by a step size and adding it to the current torsion angle vector represented by length $M$ vector $d$. The new state at time $t+1$ can simply be updated as:

$$
\begin{equation*}
s_{t+1}=s_{t}+\epsilon a_{t} \text { for some small } \epsilon \tag{34}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2024_09_12_6d47b708d04a1506823eg-09.jpg?height=259&width=1108&top_left_y=1746&top_left_x=520)

Fig. 1: Snapshots from One Episode of Dialanine Folding

In the protein side-chain packing problem, we represent the protein's configuration as a molecular graph embedded in Cartesian space where each node represents an atom and each edge represents a covalent bond. Let $\mathcal{G}=(X, A)$ be the
embedded molecular graph with node feature matrix $X$ of size $N_{\text {atom }} \times N_{\text {features }}$ and bond adjacency matrix $A$ of size $N_{\text {atoms }} \times N_{\text {atoms }}$. Each atom is represented by a feature vector in $X$ consisting of its Cartesian coordinates, a one-hot encoding of its element name (i.e. C, N, O, H, or S), its van-der Waal radius, the atomic charge, a binary number indicating if the atom can be an acceptor, a binary number indicating if the atom can be a donor, and a binary number indicating if the atom is on the backbone (see Table 1). This protein's configuration is updated in each time step $t$ based on the collection of angles in state $s_{t}$. All atomic chemical features were retrieved from the protein modeling software Rosetta and all energies were calculated using Rosetta's default scoring function [2]. Finally, we define the reward as in algorithm 1 for the soft actor-critic.

Table 1: The feature attributes specified for each atom an their dimensions

| Atomic Feature | Dimension |
| :---: | :---: |
| $x, y, z$ | 3 |
| Element | 5 |
| LJ Radius | 1 |
| Atomic Charge | 1 |
| Is Acceptor | 1 |
| Is Donor | 1 |
| Is Backbone | 1 |

### 4.2 Deep Learning Architecture

For our neural network, we create a Soft-Actor Critic (SAC) architecture as formulated in (15 with automatic temperature tuning using optimization of the dual Lagrangian. Since our state space is in the form of a graph, we use a graph convolutional neural network with the same architecture as MolGan [5 to create a valid state embedding. Actions are processed using standard trained multilayer perceptrons.

![](https://cdn.mathpix.com/cropped/2024_09_12_6d47b708d04a1506823eg-10.jpg?height=305&width=1209&top_left_y=1926&top_left_x=452)

Fig. 2: Initial vs final Energy plotted for each evaluation episode of trialanine

### 4.3 Folding and Sidechain Packing of Dipeptides

We first trained our agent on optimizing the 4 backbone dihedral angles of dialanine to achieve the lowest energy. In each epoch we resampled the backbone dihedrals using Dunbrack Lab's Ramanchandran distributions 40. The lowest energy conformation that was found had a Rosetta energy of 1.28 using the default scoring function. Although the agent was able to achieve high cumulative reward, there is a high variance in the final energy (see Figure 2). This is due to the Brownian motion term in the final optimal Langevin dynamics. When the energy was high (more than 12), the agent generally found a conformation with lower energy. However, for low initial starting energies, it proved difficult for the agent to find the optimal configuration as it often prefers exploration more than exploitation. This is again due to the constant Brownian motion terms in the agent's dynamics (Equation 26 ).

### 4.4 Trialanine Experiments

In addition to dialanine, we also tested our agent on the finding the minimal protein conformation for trialanine (i.e. three consecutively bonded alanines).

![](https://cdn.mathpix.com/cropped/2024_09_12_6d47b708d04a1506823eg-11.jpg?height=297&width=1182&top_left_y=1277&top_left_x=474)

Fig. 3: Initial vs final Energy plotted for each evaluation episode of trialanine

Figure 3 shows a clear improvement from the training agent in terms of keeping the energy score low.

Finally, the implementation is available at https:// github.com/CVC-Lab/SACfor-H-Bond-Learning.

## 5 Conclusions

In this paper, we learn the dihedral and/or rotamer angles of the optimal configuration of a protein structure by using a continuous dynamical approach. The resulting RL formulation is derived from the stochastic Pontryagin's maximum principle. Our final algorithm follows soft actor-critic and is guaranteed to converge to an optimal solution. The optimal solution follows a general Langevin
dynamics, which is considered as the suitable optimal dynamics for protein folding and structure prediction problems. We further show a variation of our formulation and its relation with the Nesterov's accelerated gradient method. This suggests that our general framework can be utilized to derive further efficient methods for protein structure prediction and for learning dynamical systems in general.

## References

1. Akutsu, T.: NP-hardness results for protein side-chain packing. In: Miyano, S., Takagi, T. (eds.) Genome Informatics. vol. 8, pp. 180-186 (1997)
2. Alford, R.F., Leaver-Fay, A., Jeliazkov, J.R., O'Meara, M.J., DiMaio, F.P., Park, H., Shapovalov, M.V., Renfrew, P.D., Mulligan, V.K., Kappel, K., Labonte, J.W., Pacella, M.S., Bonneau, R., Bradley, P., Dunbrack Jr., R.L., Das, R., Baker, D., Kuhlman, B., Kortemme, T., Gray, J.J.: The rosetta all-atom energy function for macromolecular modeling and design. Journal of chemical theory and computation 13(6), 3031-3048 (Jun 2017), 28430426[pmid]
3. AlQuraishi, M.: End-to-end differentiable learning of protein structure. Cell Systems 8(4), 292 - $301 . \mathrm{e} 3(2019)$
4. AlQuraishi, M.: ProteinNet: a standardized data set for machine learning of protein structure. BMC Bioinformatics 20(1), 311 (2019)
5. Cao, N.D., Kipf, T.: Molgan: An implicit generative model for small molecular graphs (2018)
6. Chazelle, B., Kingsford, C., Singh, M.: A semidefinite programming approach to side chain positioning with new rounding strategies. INFORMS JOURNAL ON COMPUTING 16(4), 380-392 (2004)
7. Desmet, J., Maeyer, M.D., Hazes, B., Lasters, I.: The dead-end elimination theorem and its use in protein side-chain positioning. Nature 356(6369), 539-542 (1992)
8. Desmet, J., Maeyer, M.D., Lasters, I.: Theoretical and algorithmical optimization of the dead-end elimination theorem. In: Pac. Symp. Biocomput. pp. 122-133 (1997)
9. Dunbrack, R.L., Cohen, F.E.: Bayesian statistical analysis of protein side-chain rotamer preferences. Protein Sci 6(8), 1661-1681 (1997)
10. Dunbrack, R.L.: Rotamer libraries in the 21st century. Current Opinion in Structural Biology 12(4), 431-440 (2002)
11. Dunbrack, R.L., Karplus, M.: Backbone-dependent rotamer library for proteins application to side-chain prediction. Journal of Molecular Biology 230(2), 543-574 (1993)
12. Dunbrack, R.L., Karplus, M.: Conformational analysis of the backbone-dependent rotamer preferences of protein sidechains. Nat Struct Mol Biol 1(5), 334-340 (1994)
13. Goldstein, R.F.: Efficient rotamer elimination applied to protein side-chains and related spin glasses. Biophys. J. 66(5), 1335-1340 (1994)
14. Gordon, D.B., Mayo, S.L.: Branch-and-terminate: a combinatorial optimization algorithm for protein design. Structure 7(9), 1089-1098 (1999)
15. Haarnoja, T., Zhou, A., Abbeel, P., Levine, S.: Soft actor-critic: Off-policy maximum entropy deep reinforcement learning with a stochastic actor. In: ICML (2018)
16. Holm, L., Sander, C.: Database algorithm for generating protein backbone and sidechain co-ordinates from a C[alpha] trace : Application to model building and detection of co-ordinate errors. Journal of Molecular Biology 218(1), 183-194 (1991)
17. Ingraham, J., Riesselman, A., Sander, C., Marks, D.: Learning protein sturcture with a differentiable simulator. In: ICLR (2019)
18. Jafari, R., Javidi, M.M.: Solving the protein folding problem in hydrophobic-polar model using deep reinforcement learning. SN Appl. Sci. 2(2) (2020)
19. Jumper, J., Evans, R., Pritzel, A., Green, T., Figurnov, M., Ronneberger, O., Tunyasuvunakool, K., Bates, R., Žídek, A., Potapenko, A., Bridgland, A., Meyer, C., Kohl, S.A.A., Ballard, A.J., Cowie, A., Romera-Paredes, B., Nikolov, S., Jain, R., Adler, J., Back, T., Petersen, S., Reiman, D., Clancy, E., Zielinski, M., Steinegger, M., Pacholska, M., Berghammer, T., Bodenstein, S., Silver, D., Vinyals, O., Senior, A.W., Kavukcuoglu, K., Kohli, P., Hassabis, D.: Highly accurate protein structure prediction with alphafold. Nature 596(7873), 583-589 (Aug 2021)
20. Keller, D.A., Shibata, M., Marcus, E., Ornstein, R.L., Rein, R.: Finding the global minimum: a fuzzy end elimination implementation. Protein Eng. 8(9), 893-904 (1995)
21. Kingsford, C.L., Chazelle, B., Singh, M.: Solving and analyzing side-chain positioning problems using linear and integer programming. Bioinformatics 21(7), $1028-1039(2005)$
22. Lasters, I., Desmet, J.: The fuzzy-end elimination theorem: correctly implementing the side chain placement algorithm based on the dead-end elimination theorem. Protein Eng. 6(7), 717-722 (1993)
23. Lasters, I., Maeyer, M.D., Desmet, J.: Enhanced dead-end elimination in the search for the global minimum energy conformation of a collection of protein side chains. Protein Eng. 8(8), 815-822 (1995)
24. Lau, K.F., Dill, K.A.: A lattice statistical mechanics model of the conformational and sequence spaces of proteins. Macromolecules 22(10), 3986-3997 (1989)
25. Liang, S., Grishin, N.V.: Side-chain modeling with an optimized scoring function. Protein Sci 11(2), 322-331 (2002)
26. Liu, K., Sun, X., Ma, J., Zhou, Z., Dong, Q., Peng, S., Wu, J., Tan, S., Blobel, G., Fan, J.: Prediction of amino acid side chain conformation using a deep neural network (2017)
27. Looger, L.L., Hellinga, H.W.: Generalized dead-end elimination algorithms make large-scale protein side-chain structure prediction tractable: implications for protein design and structural genomics. Journal of Molecular Biology 307(1), 429-445 (2001)
28. Lovell, S.C., Word, J.M., Richardson, J.S., Richardson, D.C.: The penultimate rotamer library. Proteins: Structure, Function, and Genetics 40(3), 389-408 (2000)
29. Maeyer, M.D., Desmet, J., Lasters, I.: All in one: a highly detailed rotamer library improves both accuracy and speed in the modelling of sidechains by dead-end elimination. Folding and Design 2(1), 53-66 (1997)
30. McGregor, M.J., Islam, S.A., Sternberg, M.J.E.: Analysis of the relationship between side-chain conformation and secondary structure in globular proteins. Journal of Molecular Biology 198(2), 295-310 (1987)
31. Mendes, J., Baptista, A., Carrondo, M., Soares, C.: Implicit solvation in the selfconsistent mean field theory method: Side-chain modeling and prediction of folding free energies of protein mutants. J. Comp. Aided. Mol. Design 5, 721-740 (2001)
32. Nagata, K., Randall, A., Baldi, P.: Sidepro: A novel machine learning approach for the fast and accurate prediction of side-chain conformations. Proteins: Structure, Function, and Bioinformatics 80(1), 142-153 (2012)
33. Peng, S.: A general stochastic maximum principle for optimal control problems. SIAM j. control optim. 28(4), 966-979 (1990)
34. Pierce, N.A., Spriet, J.A., Desmet, J., Mayo, S.L.: Conformational splitting: A more powerful criterion for dead-end elimination. Journal of Computational Chemistry 21(11), 999-1009 (2000)
35. Pierce, N.A., Winfree, E.: Protein design is NP-hard. Protein Eng. 15(10), 779-782 (2002)
36. Ponder, J.W., Richards, F.M.: Tertiary templates for proteins : Use of packing criteria in the enumeration of allowed sequences for different structural classes. Journal of Molecular Biology 193(4), 775-791 (1987)
37. Sali, A., Blundell, T.L.: Comparative protein modelling by satisfaction of spatial restraints. Journal of Molecular Biology 234(3), 779-815 (1993)
38. Senior, A.W., Evans, R., Jumper, J., Kirkpatrick, J., Sifre, L., Green, T., Qin, C., Žídek, A., Nelson, A.W.R., Bridgland, A., Penedones, H., Petersen, S., Simonyan, K., Crossan, S., Kohli, P., Jones, D.T., Silver, D., Kavukcuoglu, K., Hassabis, D.: Improved protein structure prediction using potentials from deep learning. Nature $\mathbf{5 7 7 ( 7 7 9 2 ) , ~ 7 0 6 - 7 1 0 ~ ( 2 0 2 0 ) ~}$
39. Su, W., Boyd, S., Candes, E.J.: A differential equation for modeling nesterov's accelerated gradient method: Theory and insights (2015)
40. Ting, D., Wang, G., Shapovalov, M., Mitra, R., Jordan, M.I., Dunbrack, Jr, R.L.: Neighbor-dependent ramachandran probability distributions of amino acids developed from a hierarchical dirichlet process model. PLOS Computational Biology 6, $1-21$ (04 2010)
41. Tuffery, P., Etchebest, C., Hazout, S., Lavery, R.: A new approach to the rapid determination of protein side chain conformations. J. Biomol.Struct. Dyn. 8, 12671289 (1991)
42. Voigt, C.A., Gordon, D.B., Mayo, S.L.: Trading accuracy for speed: a quantitative comparison of search algorithms in protein sequence design. Journal of Molecular Biology 299(3), 789-803 (2000)
43. Xiang, Z., Honig, B.: Extending the accuracy limits of prediction for side-chain conformations. Journal of Molecular Biology 311(2), 421-430 (2001)
44. Xu, J.: Rapid protein side-chain packing via tree decomposition. In: Research in Computational Molecular Biology, pp. 423-439 (2005)
45. Xu, J., Berger, B.: Fast and accurate algorithms for protein side-chain packing. Journal of the ACM 53(4), 533-557 (2006), 1162350
