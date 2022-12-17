const koDtf = Intl.DateTimeFormat("ko", { dateStyle: "short" });

const formatter = {
  shortDate: (value) => {
    return koDtf.format(value);
  },
};

export default formatter;
