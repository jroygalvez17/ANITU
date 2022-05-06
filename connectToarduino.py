#!/usr/bin/env python3
import serial
import numpy as np
import time
import board
import random
import requests
import json
from datetime import date

ser = serial.Serial('/dev/ttyACM1', 9600, timeout=1)
ser.reset_input_buffer()

samples = [] #Samples in Number Format

def convert(someList):
    for sample in someList:
        try:
            samples.append(float(sample))
        except:
            pass
    return samples

def postData(sample,average, hz):
    # post data using request. Other option is using http client  
    # Change the IP address, use your own computer local IP address
    url = "http://192.168.100.43:5000/api/sound/add"
    payload = json.dumps({
    "Samples": (sample),
    "Average": (average), 
    "Hertz": (hz),
    "date": time.strftime('%Y-%m-%d %H:%M:%S')
    
    })
    headers = {
    'Content-Type': 'application/json'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.text)

while True:
    try:
        if ser.in_waiting > 0:
            line = ser.readline().decode('utf-8').rstrip()
            sample, hz = line.split(';')
            sample = sample.split(' ')
            hz = float(hz)
            #print(sample)
            #print("\n")
            #average = np.maximum(convert(sample))
            #average = float(average)
            average = sample[0]
            #print("\nSample Size: ", len(sample))
            print("\nAverage: ",average)
            #print("\nTypes: ")
            #print(type(sample))
            #print(type(average))
            #print(type(hz))

            print('\nHertz: ', hz)
            postData(sample,average, hz)
            print("\nDatabase Updated")
            time.sleep(5.0)
    except RuntimeError as error:
        continue
    except Exception as error:
        continue
            
        