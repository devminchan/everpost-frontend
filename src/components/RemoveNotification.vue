<template>
  <v-dialog v-model="syncIsOn" max-width="330">
    <v-card>
      <v-card-title>정말 포스트를 삭제하시겠습니까?</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="gray darken-1" text @click="onCancel">
          아니오
        </v-btn>

        <v-btn color="red darken-1" text @click="onRemove">
          예
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, PropSync } from 'vue-property-decorator';

@Component
export default class RemoveNotification extends Vue {
  @PropSync('isOn')
  syncIsOn!: boolean;

  @Prop(Function)
  onRemove!: () => void;

  @Prop(Function)
  onCancel!: () => void;
}
</script>
