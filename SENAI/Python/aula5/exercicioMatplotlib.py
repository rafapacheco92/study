import matplotlib.pyplot as plt
import numpy as np

series = ['Friends', 'M*A*S*H', 'Game of Thrones', 'Stranger Things']
specs = [52000000, 50000000, 32800000, 40700000]
colors = ['#7A5D25', '#7A2525', '#257A6E', '#51257A']


# Fixing random state for reproducibility
np.random.seed(19680801)

fig, ax = plt.subplots()

# Example data
series = ['Friends', 'M*A*S*H', 'Game of Thrones', 'Stranger Things']
y_pos = np.arange(len(series))
specs = [52000000, 50000000, 32800000, 40700000]
error = np.random.rand(len(series))

ax.barh(y_pos, specs, color=colors, xerr=error, align='center')
ax.set_yticks(y_pos, labels=series)
ax.invert_yaxis()  # labels read top-to-bottom
ax.set_xlabel('Espectadores')
ax.set_title('Séries mais assistidas de todos os tempos')

plt.show()