"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

interface LazyVideoProps {
  videoSrc: string;
  containerWrapperClassName?: string;
  videoElementAttributes: React.VideoHTMLAttributes<HTMLVideoElement>;
  customPlaceholderImageSrc?: string;
  skeletonAdditionalClassName?: string;
}

export function LazyVideo({
  videoSrc,
  containerWrapperClassName,
  videoElementAttributes,
  customPlaceholderImageSrc,
  skeletonAdditionalClassName,
}: LazyVideoProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [videoBlobUrl, setVideoBlobUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<Error | null>(null); 
  const elementRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        rootMargin: '200px 0px',
        threshold: 0.01,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [videoSrc]); // Re-run observer setup if videoSrc changes, so it can observe a new element if needed

  useEffect(() => {
    let currentBlobUrlToRevoke: string | null = null;

    const fetchVideo = async () => {
      // Condition to fetch:
      // ADDED !fetchError to the condition
      if (isIntersecting && videoSrc && !videoBlobUrl && !isLoading && !fetchError) {
        setIsLoading(true);
        try {
          const response = await fetch(videoSrc);
          if (!response.ok) {
            const error = new Error(`Failed to fetch video: ${response.status} ${response.statusText}`);
            setFetchError(error); // <--- SET Error state
            console.error(error.message, `URL: ${videoSrc}`);
            return; // Exit early
          }
          const blob = await response.blob();
          currentBlobUrlToRevoke = URL.createObjectURL(blob);
          setVideoBlobUrl(currentBlobUrlToRevoke);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          console.error("Error fetching video (catch block):", error.message, `URL: ${videoSrc}`);
          setFetchError(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (isIntersecting) { // Only attempt fetch if intersecting
        fetchVideo();
    }


    return () => {
      if (currentBlobUrlToRevoke) {
        URL.revokeObjectURL(currentBlobUrlToRevoke);
      }
    };
  }, [isIntersecting, videoSrc, videoBlobUrl, isLoading, fetchError]); // Added fetchError to dependencies

  const { className: videoHtmlClassName, ...restVideoAttributes } = videoElementAttributes;

  let skeletonHeight = '500px';
  if (restVideoAttributes.height) {
    skeletonHeight = typeof restVideoAttributes.height === 'string'
      ? restVideoAttributes.height
      : `${restVideoAttributes.height}px`;
  }

  // Show placeholder if there's a fetch error OR if the video isn't loaded yet
  const showPlaceholder = fetchError || !videoBlobUrl;

  return (
    <div ref={elementRef} className={containerWrapperClassName}>
      {showPlaceholder ? (
        customPlaceholderImageSrc && !fetchError ? (
          <Image
            src={customPlaceholderImageSrc}
            alt={restVideoAttributes['aria-label'] ? `Placeholder for ${restVideoAttributes['aria-label']}` : "Video placeholder"}
            className={videoHtmlClassName}
            width={typeof restVideoAttributes.width === 'string' ? parseInt(restVideoAttributes.width) : restVideoAttributes.width}
            height={typeof restVideoAttributes.height === 'string' ? parseInt(restVideoAttributes.height) : restVideoAttributes.height}
          />
        ) : (
          <div
            className={`relative flex items-center justify-center bg-gray-200  ${!fetchError ? 'animate-pulse' : ''} ${videoHtmlClassName || ''} ${skeletonAdditionalClassName || ''}`}
            style={{ height: skeletonHeight, width: '320px' }}
            aria-label={fetchError ? 'Error loading video' : (restVideoAttributes['aria-label'] ? `Loading ${restVideoAttributes['aria-label']}` : "Loading video content")}
          >
            {/* Optionally, show a different icon or message on error */}
            {fetchError ? (
              <span className="text-red-500 text-xs p-2 text-center">Video unavailable</span>
            ) : (
              <Play
                className="w-16 h-16 text-gray-400 dark:text-gray-500 opacity-60"
                aria-hidden="true"
              />
            )}
          </div>
        )
      ) : (
        // If videoBlobUrl is somehow set but there was a fetchError earlier, this might be problematic.
        // However, fetchError should prevent videoBlobUrl from being set.
        <video ref={videoRef} src={videoBlobUrl!} className={videoHtmlClassName} {...restVideoAttributes} />
      )}
    </div>
  );
}