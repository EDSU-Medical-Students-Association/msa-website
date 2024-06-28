import PaymentForm from "~/components/dashboard/form/payment/payment-form";

function Dashboard() {
  const name = "Joseph@msa.com";
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl">Welcome, {name}</h1>
        </div>
        <div>
          <div className="grid aspect-square w-10 place-items-center rounded-full bg-yellow-600">
            <p>J</p>
          </div>
        </div>
      </div>
      <div>
        <PaymentForm />
      </div>
    </>
  );
}

export default Dashboard;
