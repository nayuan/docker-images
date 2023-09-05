FROM python:3.8.17-bullseye

RUN apt-get update
RUN apt-get install mesa-libGL
RUN apt-get install libgl1
RUN apt-get install libgl1-mesa-glx
RUN apt-get install libgl1-mesa-dev
RUN rm -rf /var/lib/apt/lists/* && pip install --upgrade pip && pip install numpy && pip install plyfile && pip install flask && pip install trimesh && pip install mysql-connector-python && pip install pypng && pip install imageio && pip install opencv-contrib-python && pip install open3d && pip install matplotlib
