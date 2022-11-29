for (let i = 1; i <= 39; i++) {
  console.log(
    `
    - platform: gpio
      pin:
        number: ${i}
        mode: INPUT_PULLDOWN
      name: "Button ${i}"
    `);
}
