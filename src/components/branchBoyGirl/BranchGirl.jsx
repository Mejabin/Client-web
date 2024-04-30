import React from "react";
import GirlImage from "@/assets/girls.jpeg";

export const BranchBoy = () => {
  return (
    <div className="container  mx-auto">
      <b>
        <span className="text-blue-500 text-xl font-vrinda">
          বালিকা ক্যাম্পাস
        </span>
      </b>
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…AG3EaqibSOazyVPGamnVsdeBVQMqnJpASbaKX7QKKBXP/2Q=="
        width={500}
        alt=""
      />
      <p className="my-6">
        <b>
          <span className="text-xl font-vrinda">বাড়ি -৩৭</span>
        </b>
        <b>,&nbsp;</b>
        <b>
          <span className="text-xl font-vrinda">রোড- ২২</span>
        </b>
        <b>,&nbsp;</b>
        <b>
          <span className="text-xl font-vrinda">রূপনগর আবাসিক এলাকা</span>
        </b>
        <b>,&nbsp;</b>
        <b>
          <span className="text-xl font-vrinda">মিরপুর</span>
        </b>
        <b>,&nbsp;</b>
        <b>
          <span className="text-xl font-vrinda">ঢাকা।</span>
        </b>
        <br />
        <b>
          <span className="text-xl font-vrinda">ফোন &nbsp;: ০২-৪৮০৩৮৫৩৬</span>
        </b>
        <br />
        <b>
          <span className="text-xl font-vrinda">ফোন &nbsp;: ০২-৪৮০৩৮৫৩৬</span>
        </b>
      </p>
      <div>
        <b>
          <img
            src={GirlImageImage}
            style={{ maxWidth: "50%", height: "30%" }}
            alt=""
          />
        </b>
      </div>
    </div>
  );
};
