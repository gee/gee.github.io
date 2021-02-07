---
layout: page
image: /public/images/hadoop-logo-2.jpg
title: Hadoop Clusters
year: 2018
summary: The creation of two Hadoop clusters — one in the cloud and one in a Linux lab.
rank: 7
---

<img src="/public/images/hadoop-banner.jpg">

This class assignment required that I do considerable research into a relevant operating systems topic. One topic that caught my eye was Hadoop. Specifically, I decided to create two Hadoop clusters: one in the cloud and one in my university's Linux computer lab.

In a Hadoop cluster, one machine is designated as the master, and all others are nodes called workers. The master distributes tasks to the workers in order to process large data sets. Hadoop itself consists of four main modules: Hadoop Common, Hadoop Distributed File System, Hadoop YARN, and Hadoop MapReduce. Each of these needed to be installed on every machine.

<img src="/public/images/hadoop-linode.jpg" width="300" align="right">

First, I wanted a cluster in the cloud. I rented three Linux servers in Dallas, Texas, from linode.com. I installed Ubuntu and Oracle's Java Development Kit, a prerequisite to running Hadoop. I then installed each of the modules and made sure all files were properly configured.

Using Linode, I set up a cluster with 3 systems: 1 master and 2 workers. This of course would not be practical, but this was simply an academic project. I was able to use SSH to access the three Texas systems and install Hadoop. This all worked fairly well, and I was able to accomplish my end goal, which was to successfully run a sample MapReduce program. In this case I ran a program to count the occurrences of every word in a given novel.

<img src="/public/images/hadoop-yarn.jpg">

The next day, a mysterious entity called "dr.who" accessed my systems and began running his own programs at maximum capacity. I did not expect this, but then again it should not have come as too much of a surprise given that I skipped several of the recommended security measures.

<img src="/public/images/hadoop-lab.jpg">

Second, I wanted a cluster in the university’s Linux lab. There are 19 workstations, and I used 13 in my cluster: 1 master and 12 workers. Because I did not have root permissions on the machines themselves, I had to first create 13 Ubuntu virtual machines. When it came to issuing commands in Bash, I sped up the process by using SSH to log in to each of the 12 worker nodes from my master node. Looking back, this process could have been further streamlined by running a Perl script to run each command on all the nodes at once.

Fortunately, the Linux lab is protected by the University of Northwestern – St. Paul's security, and thus I had no need to worry about any other infiltrators. The 13-node cluster was able to run its MapReduce programs in peace, and it did so successfully after many hours of installation, configuration, troubleshooting, and so on.

<img src="/public/images/hadoop-bash.jpg">

I turned in a paper and gave an in-class presentation for COS3267 Operating Systems Concepts.