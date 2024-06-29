import PaymentForm from "~/components/dashboard/form/payment/payment-form";
import { crismonPro } from "~/fonts";
import { cn } from "~/lib/utils";

function Dashboard() {
  const name = "Joseph@msa.com";
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h6 className="text-2xl">Welcome, {name}</h6>
        </div>

        <div>
          <div className="grid aspect-square w-10 place-items-center rounded-full bg-yellow-600">
            <p>J</p>
          </div>
        </div>
      </div>
      <div className="grid h-full place-items-center ">
        <PaymentForm />
      </div>
    </>
  );
}

export default Dashboard;
