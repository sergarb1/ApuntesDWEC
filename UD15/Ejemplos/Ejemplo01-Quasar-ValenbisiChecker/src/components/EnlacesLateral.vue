<template>
    <q-list>
        <q-item-label header>Mi ValenBisi Checker</q-item-label>

        <q-item to="/estaciones" exact>
          <q-item-section avatar>
            <q-icon name="directions_bike" />
          </q-item-section>

          <q-item-section>
            Listado estaciones ValenBisi
          </q-item-section>
        </q-item>

        <q-item to="/carril" exact>
          <q-item-section avatar>
            <q-icon name="place" />
          </q-item-section>

          <q-item-section>
            Mapa CarrilBici
          </q-item-section>
        </q-item>

        <q-item to="/acercade" exact>
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>

          <q-item-section>
            Acerca de
          </q-item-section>
        </q-item>
      </q-list>
</template>