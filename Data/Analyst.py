
 
import json
import datetime
from datetime import datetime as mydatetime

# Returns the float time in days since @myDate
def time_since(myDate):
    result = (mydatetime.now() - mydatetime.strptime(myDate, "%d.%m.%Y %H:%M:%S")).total_seconds()/datetime.timedelta(days=1).total_seconds()
    return float("{:.5f}".format(result))

 
# Opening JSON file
f = open('Regestries.json')
 
# returns JSON object as
# a dictionary
data = json.load(f)

parsed_data = []
for registry in data['Regestries']:
    parsed_registry = {}
    parsed_registry['days from last collection'] = time_since(registry['Last Collected'])

    parsed_data.append(parsed_registry)
 
# Iterating through the json
# list
for i in parsed_data:
    print(i)
 
# Closing file
f.close()