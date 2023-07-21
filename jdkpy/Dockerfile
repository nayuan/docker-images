FROM python:3.11.4-bullseye

RUN apt-get update && apt-get -y install openjdk-11-jdk && rm -rf /var/lib/apt/lists/* && pip install opencv-python-headless && pip install jsonschema && pip install Pillow && pip install pandas && pip install shapely && pip install openpyxl && pip install boto3 && pip install pylzf && pip install open3d
