FROM python:3.8.17-bullseye

RUN apt-get update && apt-get install libgl1 -y && apt-get install libgl1-mesa-glx libgl1-mesa-dev
RUN pip install --upgrade pip && pip install opencv-python-headless &&  pip install numpy && pip install plyfile && pip install flask && pip install trimesh && pip install mysql-connector-python && pip install pypng && pip install imageio && pip install opencv-contrib-python && pip install open3d && pip install matplotlib
