<template>
  <div class="_base-count-down">
    <div class="content">
      <slot
        v-bind="{
          d: days,
          h: hours,
          m: mins,
          s: seconds,
          hh: `00${hours}`.slice(-2),
          mm: `00${mins}`.slice(-2),
          ss: `00${seconds}`.slice(-2),
        }"
      ></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    time: {
      type: [String, Number],
      default: 0,
    },
    isMilliSecond: {
      type: Boolean,
      default: false,
    },
    end: {
      type: [String, Number],
      default: 0,
    },
  },
  data() {
    return {
      days: '0',
      hours: '00',
      mins: '00',
      seconds: '00',
      timer: null,
      curTime: 0,
    };
  },
  computed: {
    duration() {
      if (this.end) {
        let end = String(this.end).length >= 13 ? +this.end : +this.end * 1000;
        end -= Date.now();
        return end;
      }
      return this.isMilliSecond ? Math.round(+this.time / 1000) : Math.round(+this.time);
    },
  },
  watch: {
    duration() {
      this.countDown();
    },
  },
  mounted() {
    this.countDown();
  },
  methods: {
    countDown() {
      this.curTime = Date.now();
      this.getTime(this.duration);
    },
    getTime(duration) {
      this.timer && clearTimeout(this.timer);
      if (duration < 0) return;

      const { dd, hh, mm, ss } = this.durationFormatter(duration);
      this.days = dd || 0;
      this.hours = hh || 0;
      this.mins = mm || 0;
      this.seconds = ss || 0;
      this.timer = setTimeout(() => {
        const now = Date.now();
        const diffTime = Math.floor((now - this.curTime) / 1000);
        this.curTime = now;
        this.getTime(duration - diffTime);
      }, 1000);
    },
    durationFormatter(time) {
      if (!time) return { ss: 0 };
      let t = time;

      const ss = t % 60;
      t = (t - ss) / 60;
      if (t < 1) return { ss };

      const mm = t % 60;
      t = (t - mm) / 60;
      if (t < 1) return { mm, ss };

      const hh = t % 24;
      t = (t - hh) / 24;
      if (t < 1) return { hh, mm, ss };

      const dd = t;
      return { dd, hh, mm, ss };
    },
  },
};
</script>

<style lang="scss" scoped></style>
