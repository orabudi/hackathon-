import json

f= open('Regestries.json')

data = json.load(f)

for registry in data['Regestries']:
    my = {}
    my['Collections'] = 28
    my['Average'] = 1.1
    my['Variance'] = 0.045
    registry['rate'] = my

f.close()

out = open('History.json', 'w')
json.dump(data, out, indent=4, separators=(",", ": "))
out.close()