FROM python:3.8.17-bullseye

RUN apt-get update && apt-get install mesa-libGL && apt-get install libgl1 && apt-get install libgl1-mesa-glx libgl1-mesa-dev && rm -rf /var/lib/apt/lists/* && pip install --upgrade pip && pip install numpy && pip install plyfile && pip install flask && pip install trimesh && pip install mysql-connector-python && pip install pypng && pip install imageio && pip install opencv-contrib-python && pip install open3d && pip install matplotlib
