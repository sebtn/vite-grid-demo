export function sparklineTooltipRenderer(params) {
  return {
    content: params.yValue.toFixed(2),
  };
}
