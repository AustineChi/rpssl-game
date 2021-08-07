const size = {
  xs: "320px",
  sm: "768px",
  lg: "1200px",
};

export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
};

export async function sendPost(url: string, param: any) {
  const res = await fetch(url, {
    body: JSON.stringify(param),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  return res.json();
}

export function getReultStatus(val: string) {
  if (val === "win") {
    return {
      player: true,
      computer: false,
    };
  }
  if (val === "tie") {
    return {};
  }
  if (val === "lose") {
    return {
      player: false,
      computer: true,
    };
  }
}
