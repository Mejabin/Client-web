import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Link } from "react-router-dom";
  
  const CustomAccordion = ({ triggerName, contentArray }) => {
    return (
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value={triggerName}>
            <AccordionTrigger>{triggerName}</AccordionTrigger>
            <AccordionContent>
              {contentArray.map((item) => (
                <div key={Math.random()}>
                  <Link to={item?.url}>{item?.content}</Link>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  };
  

export default CustomAccordion