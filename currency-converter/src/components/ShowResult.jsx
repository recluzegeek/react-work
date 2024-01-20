export default function ShowResult({amount, conversion, base, target}) {
    const convertedAmount = amount * conversion;
    const baseStr = base.toUpperCase();
    const targetStr = target.toUpperCase();
    return (
      <div className="relative -left-52 mt-4">
        <p className="font-semibold">
          {amount} {baseStr} ={" "}
        </p>
        <h3 className="font-bold text-2xl">
          {convertedAmount} {targetStr}
        </h3>
        <small className="block text-base">
          1 {baseStr} = {conversion} {targetStr}
        </small>
        <small className="block text-base">
          1 {targetStr} = {1 / conversion} {baseStr}
        </small>
      </div>
    );
  }
