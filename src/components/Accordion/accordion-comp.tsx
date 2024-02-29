import React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ContentType = {
  buttonText: string;
  content: string;
};

interface Props {
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
  data: ContentType[];
}

const defaultProps = {
  className: "",
  buttonClassName: "",
  contentClassName: "",
  data: [{ buttonText: "Button Text", content: "Accordian content" }], // default arguments
};

/**
 *  ## Accordion Component
 * @param props - Props
 * ### Required props
 * @param {ContentType[]} props.data - Array of objects with buttonText and content
 * @param {string} props.data.buttonText - String Text for the button
 * @param {string} props.data.content - String Content for the accordion
 *
 * ---
 *
 * ### Optional props
 * @param {string} props.className - Classname for the accordion
 * @param {string} props.buttonClassName - Classname for the button
 * @param {string} props.contentClassName - Classname for the content
 */
const AccordianComp = (props: Props = defaultProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("w-full", props.className)}
    >
      {props.data.map((elem, ind) => (
        <AccordionItem value="item-1" key={ind}>
          <AccordionTrigger className={props.buttonClassName}>
            {elem.buttonText}
          </AccordionTrigger>
          <AccordionContent className={props.contentClassName}>
            {elem.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordianComp;
