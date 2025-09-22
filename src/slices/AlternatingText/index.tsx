"use client";

import { FC } from "react";
import { asText, Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";

export type AlternatingTextProps =
  SliceComponentProps<Content.AlternatingTextSlice>;

const AlternatingText: FC<AlternatingTextProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="alternating-text-container relative bg-yellow-300 px-4 text-sky-950"
    >
      <div>
        <div className="relative z-[100] grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>
          {slice.primary.text_group.map((item, index) => (
            <div
              key={asText(item.heading)}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30",
                )}
              >
                <h2 className="text-balance text-6xl font-bold">
                  <PrismicText field={item.heading} />
                </h2>
                <div className="mt-4 text-xl">
                  <PrismicRichText field={item.body} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlternatingText;
